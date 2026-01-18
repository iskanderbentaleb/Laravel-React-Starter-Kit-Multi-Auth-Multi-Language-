# 🚀 Laravel & React Starter Kit: Multi-Auth + Multi-Language

A professional-grade starter kit built with **Laravel 12**, **React 19 (Inertia.js)**, **Tailwind CSS 4**, and **Laravel Fortify**. This kit features a robust Multi-Authentication system (User/Admin), 2FA, and a seamless Multi-Language (i18n) implementation.

---

## 🛠️ Step 1: Installation Guide

Follow these steps to get your project up and running locally.

### 1. Prerequisites
- **PHP 8.2+**
- **Composer**
- **Node.js & NPM**
- **MySQL/PostgreSQL**

### 2. Setup Commands
```bash
# 1. Clone the repository
git clone https://github.com/iskanderbentaleb/Laravel-React-Starter-Kit-Multi-Auth-Multi-Language-.git
cd Laravel-React-Starter-Kit-Multi-Auth-Multi-Language-

# 2. Install Dependencies
composer install
npm install

# 3. Environment Configuration
cp .env.example .env
php artisan key:generate

# 4. Database Setup
# (Ensure your DB credentials in .env are correct)
php artisan migrate --seed

# 5. Start Development Servers
composer run dev
```

> [!TIP]
> Use `php artisan db:seed --class=AdminSeeder` if you want to create a default admin user (admin@gmail.com / password).

---

## 🔐 Step 2: Adding Multi-Auth (Step-by-Step)

This kit uses **Guards** to separate Admins and Users.

### Backend Setup (Laravel)
1. **Model & Migration**: Create a new model (e.g., `Admin`) that extends `Authenticatable` and has a migration similar to the `users` table.
2. **Auth Config** (`config/auth.php`):
   - Add a new **Guard** using the `session` driver.
   - Add a new **Provider** using your new Model.
   - Add a **Password Reset** broker for the new guard.
3. **Dynamic Guard Middleware**: 
   - We created `App\Http\Middleware\DynamicGuard.php`. 
   - It checks `if ($request->is('admin*'))` and sets `config(['fortify.guard' => 'admin'])`.
4. **Fortify Customization**:
   - In `FortifyServiceProvider.php`, we dynamically bind `StatefulGuard` based on the request.
   - We override `LoginResponse`, `LogoutResponse`, and `TwoFactorLoginResponse` to redirect users based on their guard.

### Frontend Setup (React/Inertia)
1. **Routes**: Define routes in `routes/web.php` inside a `Route::prefix('admin')` group.
2. **Context**: Use the `auth` prop shared via `HandleInertiaRequests.php` to access the currently logged-in user and their guard.
3. **Layouts**: Wrap Admin pages in a dedicated `AdminLayout` and User pages in an `AppLayout`.

---

## 🌍 Step 3: Adding Multi-Language (Step-by-Step)

We combine **Laravel's Backend Translations** with **React's i18next**.

### Backend Setup (Laravel)
1. **Translation Files**: Add folders (e.g., `lang/ar`, `lang/fr`) with `.php` or `.json` files.
2. **Persistent Locale Middleware**:
   - We created `App\Http\Middleware\SetLocale.php`.
   - it reads the `app_locale` cookie and sets `App::setLocale()`.
   - Register this in `bootstrap/app.php` in the `web` middleware group.

### Frontend Setup (React/i18n)
1. **i18next Config**: Configure `resources/js/i18n.ts` with your namespaces and languages.
2. **Language Selector**: 
   - Create a `LanguageSelector.tsx` component.
   - It should update both the `i18next` state AND the `app_locale` cookie.
3. **Usage**: Use the `useTranslation()` hook in your components:
   ```tsx
   const { t } = useTranslation();
   return <h1>{t('welcome_message')}</h1>;
   ```

---

## 🛡️ Step 4: Security & DDoS Protection

We've implemented professional-grade rate limiting to protect your application.

1. **Guard-Aware Throttling**: Brute-force protection tracks login attempts separately for Admins and Users (`email|ip|guard`).
2. **Global DDoS Shield**: A global rate limiter in `bootstrap/app.php` prevents automated scripts from overwhelming the server (100 requests/min).

---

## 🚀 Deployment
Ensure you run:
```bash
composer install --optimize-autoloader --no-dev
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

---

*Built with ❤️ by Iskander Bentaleb*
