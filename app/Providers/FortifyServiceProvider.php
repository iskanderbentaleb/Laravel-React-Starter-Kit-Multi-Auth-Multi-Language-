<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use Laravel\Fortify\Fortify;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;


class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(\Illuminate\Contracts\Auth\StatefulGuard::class, function ($app) {
            $request = $app->make('request');
            $isAdmin = $request->is('admin*') || $request->segment(1) === 'admin' || str_contains($request->url(), '/admin');
            return $app['auth']->guard($isAdmin ? 'admin' : 'web');
        });

        $this->app->bind(\Laravel\Fortify\Contracts\LoginResponse::class, function ($app) {
            return new class implements \Laravel\Fortify\Contracts\LoginResponse {
                public function toResponse($request)
                {
                    $home = $request->is('admin*') ? route('admin.dashboard') : config('fortify.home');
                    return $request->wantsJson()
                                ? response()->json(['two_factor' => false])
                                : redirect()->intended($home);
                }
            };
        });

        $this->app->bind(\Laravel\Fortify\Contracts\LogoutResponse::class, function ($app) {
            return new class implements \Laravel\Fortify\Contracts\LogoutResponse {
                public function toResponse($request)
                {
                    $redirect = $request->is('admin*') ? route('admin.login') : '/';
                    return $request->wantsJson()
                                ? response()->json(['message' => 'Logged out'])
                                : redirect($redirect);
                }
            };
        });

        // 2FA Challenge View Response - for redirects or direct access
        $this->app->bind(\Laravel\Fortify\Contracts\TwoFactorChallengeViewResponse::class, function ($app) {
            return new class implements \Laravel\Fortify\Contracts\TwoFactorChallengeViewResponse {
                public function toResponse($request)
                {
                    if ($request->is('admin*')) {
                        return Inertia::render('Admin/Auth/TwoFactorChallenge');
                    }
                    return Inertia::render('auth/two-factor-challenge');
                }
            };
        });

        // RedirectsIfTwoFactorAuthenticatable - for the initial login redirect to challenge
        $this->app->bind(\Laravel\Fortify\Contracts\RedirectsIfTwoFactorAuthenticatable::class, function ($app) {
            return new class(
                $app->make(\Illuminate\Contracts\Auth\StatefulGuard::class),
                $app->make(\Laravel\Fortify\LoginRateLimiter::class)
            ) extends \Laravel\Fortify\Actions\RedirectIfTwoFactorAuthenticatable {
                public function __construct($guard, $limiter)
                {
                    parent::__construct($guard, $limiter);
                }

                public function handle($request, $next)
                {
                    $user = $this->validateCredentials($request);

                    // Prevent lockout: Only challenge if 2FA is CONFIRMED.
                    // If user enabled but didn't verify, confirmed_at is null.
                    if ($user?->two_factor_secret &&
                        ! is_null($user->two_factor_confirmed_at) &&
                        in_array(\Laravel\Fortify\TwoFactorAuthenticatable::class, class_uses_recursive($user))) {
                        return $this->twoFactorChallengeResponse($request, $user);
                    }

                    return $next($request);
                }

                protected function twoFactorChallengeResponse($request, $user)
                {
                    $request->session()->put([
                        'login.id' => $user->getKey(),
                        'login.remember' => $request->boolean('remember'),
                    ]);

                    \Laravel\Fortify\Events\TwoFactorAuthenticationChallenged::dispatch($user);

                    if ($request->wantsJson() && ! $request->header('X-Inertia')) {
                        return response()->json(['two_factor' => true]);
                    }

                    // For Inertia or standard requests, determine the route
                    $route = $request->is('admin*') ? 'admin.two-factor.login' : 'two-factor.login';
                    return redirect()->route($route);
                }
            };
        });

        // 2FA Login Response - after successful OTP verification
        $this->app->bind(\Laravel\Fortify\Contracts\TwoFactorLoginResponse::class, function ($app) {
            return new class implements \Laravel\Fortify\Contracts\TwoFactorLoginResponse {
                public function toResponse($request)
                {
                    $isAdmin = $request->is('admin*') || $request->segment(1) === 'admin' || str_contains($request->url(), '/admin');
                    $home = $isAdmin ? route('admin.dashboard') : config('fortify.home');
                    
                    if ($request->wantsJson() && ! $request->header('X-Inertia')) {
                        return response()->json(['two_factor' => false]);
                    }
                    
                    return redirect()->intended($home);
                }
            };
        });

        $this->app->bind(\Laravel\Fortify\Contracts\FailedTwoFactorLoginResponse::class, function ($app) {
            return new class implements \Laravel\Fortify\Contracts\FailedTwoFactorLoginResponse {
                public function toResponse($request)
                {
                    [$key, $message] = $request->filled('recovery_code')
                        ? ['recovery_code', __('The provided two factor recovery code was invalid.')]
                        : ['code', __('The provided two factor authentication code was invalid.')];

                    $route = ($request->is('admin*') || $request->segment(1) === 'admin') 
                        ? 'admin.two-factor.login' 
                        : 'two-factor.login';
                        
                    return redirect()->route($route)->withErrors([$key => $message]);
                }
            };
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $this->configureActions();
        $this->configureViews();
        $this->configureRateLimiting();
    }

    /**
     * Configure Fortify actions.
     */
    private function configureActions(): void
    {
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);
        Fortify::createUsersUsing(CreateNewUser::class);
    }

    /**
     * Configure Fortify views.
     */
    private function configureViews(): void
    {
        Fortify::loginView(function (Request $request) {
            $view = $request->is('admin*') ? 'Admin/Auth/Login' : 'auth/login';
            return Inertia::render($view, [
                'canResetPassword' => Features::enabled(Features::resetPasswords()),
                'canRegister' => Features::enabled(Features::registration()),
                'status' => $request->session()->get('status'),
            ]);
        });

        Fortify::resetPasswordView(function (Request $request) {
            $view = $request->is('admin*') ? 'Admin/Auth/ResetPassword' : 'auth/reset-password';
            return Inertia::render($view, [
                'email' => $request->email,
                'token' => $request->route('token'),
            ]);
        });

        Fortify::requestPasswordResetLinkView(function (Request $request) {
            $view = $request->is('admin*') ? 'Admin/Auth/ForgotPassword' : 'auth/forgot-password';
            return Inertia::render($view, [
                'status' => $request->session()->get('status'),
            ]);
        });

        Fortify::verifyEmailView(function (Request $request) {
            $view = $request->is('admin*') ? 'Admin/Auth/VerifyEmail' : 'auth/verify-email';
            return Inertia::render($view, [
                'status' => $request->session()->get('status'),
            ]);
        });

        Fortify::registerView(function (Request $request) {
            // Register is usually disabled for admin, but we keep it generic if needed
            return Inertia::render('auth/register');
        });

        Fortify::twoFactorChallengeView(function (Request $request) {
            $view = $request->is('admin*') ? 'Admin/Auth/TwoFactorChallenge' : 'auth/two-factor-challenge';
            return Inertia::render($view);
        });

        Fortify::confirmPasswordView(function (Request $request) {
            $view = $request->is('admin*') ? 'Admin/Auth/ConfirmPassword' : 'auth/confirm-password';
            return Inertia::render($view);
        });

        Fortify::confirmPasswordsUsing(function ($user, $password) {
            return $password && Hash::check($password, $user->password);
        });
    }

    /**
     * Configure rate limiting.
     */
    private function configureRateLimiting(): void
    {
        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        RateLimiter::for('login', function (Request $request) {
            $throttleKey = Str::transliterate(Str::lower($request->input(Fortify::username())).'|'.$request->ip());
            
            // Distinguish between admin and user login attempts
            $isAdmin = $request->is('admin*') || $request->segment(1) === 'admin';
            $guard = $isAdmin ? 'admin' : 'web';

            return Limit::perMinute(5)->by($throttleKey.'|'.$guard);
        });
    }


}
