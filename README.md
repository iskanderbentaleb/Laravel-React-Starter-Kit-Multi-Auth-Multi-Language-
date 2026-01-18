# Multi-Auth & 2FA Integration Guide

This document explains how the project implements multiple user types (User and Admin) and the Two-Factor Authentication (2FA) system using Laravel Fortify and React (Inertia.js).

## 1. Multi-Auth Setup (Users & Admins)

To support separate authentication for regular users and admins, we use distinct guards and providers.

### A. Model & Migration
1. **Create the Admin Model**:
   ```bash
   php artisan make:model Admin -m
   ```
2. **Update Admin Model**: Ensure it extends `Authenticatable` and uses `TwoFactorAuthenticatable`.
   ```php
   // app/Models/Admin.php
   use Laravel\Fortify\TwoFactorAuthenticatable;
   use Illuminate\Foundation\Auth\User as Authenticatable;

   class Admin extends Authenticatable {
       use TwoFactorAuthenticatable, Notifiable;
       // ...
   }
   ```

### B. Configuration (`config/auth.php`)
Register the new guard and provider so Laravel knows how to authenticate admins.

```php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],
    'admin' => [
        'driver' => 'session',
        'provider' => 'admins',
    ],
],

'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\User::class,
    ],
    'admins' => [
        'driver' => 'eloquent',
        'model' => App\Models\Admin::class,
    ],
],

'passwords' => [
    'admins' => [
        'provider' => 'admins',
        'table' => 'password_reset_tokens',
        'expire' => 60,
        'throttle' => 60,
    ],
],
```

### C. Dynamic Guard Middleware
To make Fortify work with both guards seamlessly, we use a `DynamicGuard` middleware that detects the request path.

```php
// app/Http/Middleware/DynamicGuard.php
public function handle(Request $request, Closure $next) {
    if ($request->is('admin*')) {
        Config::set('fortify.guard', 'admin');
        Config::set('fortify.passwords', 'admins');
        Config::set('auth.defaults.guard', 'admin');
        auth()->shouldUse('admin');
    }
    return $next($request);
}
```
*Registered as global middleware in `bootstrap/app.php`.*

---

## 2. Fortify Integration & Customization

Fortify is customized in `app/Providers/FortifyServiceProvider.php` to handle dynamic guards.

### A. Dynamic Guard Binding
We bind `StatefulGuard` to resolve the guard based on the request prefix.
```php
$this->app->bind(\Illuminate\Contracts\Auth\StatefulGuard::class, function ($app) {
    $request = $app->make('request');
    $isAdmin = $request->is('admin*') || $request->segment(1) === 'admin';
    return $app['auth']->guard($isAdmin ? 'admin' : 'web');
});
```

### B. Custom Responses
We override Fortify's default responses to handle redirects correctly:
- **`LoginResponse` / `TwoFactorLoginResponse`**: Redirect admins to `/admin/dashboard` and users to `/dashboard`.
- **`LogoutResponse`**: Redirect admins to `/admin/login`.
- **`FailedTwoFactorLoginResponse`**: Ensure admins stay on the admin login page if 2FA fails.

---

## 3. Two-Factor Authentication (2FA) Flow

The 2FA implementation follows a secure, multi-step process.

### A. Implementation Flow
1. **Enable**: User clicks "Enable 2FA". The backend generates a secret and QR code.
2. **Setup**: The QR code and manual setup key are displayed to the user.
3. **Verify**: The user scans the QR and enters the 6-digit OTP code to confirm.
4. **Recovery Codes**: Only *after* successful OTP verification, recovery codes are generated and displayed.

### B. Components
- **`TwoFactorSetupModal.tsx`**: A multi-step React component that guides the user through Setup -> Verification -> Recovery Codes.
- **`TwoFactorChallenge.tsx`**: The page where users/admins enter their OTP or recovery code during login.

## 4. Summary of Routes

- **User**: `/login`, `/register`, `/dashboard`, `/settings/two-factor`.
- **Admin**: `/admin/login`, `/admin/dashboard`, `/admin/settings/two-factor`.

By using the `admin` prefix and `DynamicGuard`, we keep the logic clean and separate while reusing the powerful features of Laravel Fortify.
# Laravel-React-Starter-Kit-Multi-Auth-Multi-Language-
