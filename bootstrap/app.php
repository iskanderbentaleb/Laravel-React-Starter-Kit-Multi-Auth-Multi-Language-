<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware): void {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state', 'app_locale']);

        $middleware->web(append: [
            \App\Http\Middleware\SetLocale::class,
            \App\Http\Middleware\DynamicGuard::class,
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        // Global DDoS protection for all web routes
        $middleware->web(append: [
            'throttle:100,1',
        ]);

        $middleware->alias([
            'guest' => \App\Http\Middleware\RedirectIfAnyAuthenticated::class,
        ]);
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        // Convert 429 (Too Many Requests) to 422 (Validation Error) for Inertia requests
        // so it shows the message in the form instead of the 429 error page.
        $exceptions->render(function (\Illuminate\Http\Exceptions\ThrottleRequestsException $e, \Illuminate\Http\Request $request) {
            if ($request->header('X-Inertia')) {
                return back()->withErrors([
                    \Laravel\Fortify\Fortify::username() => [__('auth.throttle', ['seconds' => $e->getHeaders()['Retry-After'] ?? 60])],
                ])->setStatusCode(422);
            }
        });
    })->create();
