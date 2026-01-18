<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome/index', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Admin Routes
Route::prefix('admin')->group(function () {
    // Guest Admin Routes
    Route::middleware(['guest', 'throttle:login'])->group(function () {
        // We use the same controller as Fortify but our DynamicGuard middleware 
        // will have already set fortify.guard to 'admin'
        Route::get('login', [Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::class, 'create'])->name('admin.login');
        Route::post('login', [Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::class, 'store'])->name('admin.login.store');

        Route::get('two-factor-challenge', [Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::class, 'create'])
            ->name('admin.two-factor.login');
        Route::post('two-factor-challenge', [Laravel\Fortify\Http\Controllers\TwoFactorAuthenticatedSessionController::class, 'store'])
            ->name('admin.two-factor.login.store');

        Route::get('forgot-password', [Laravel\Fortify\Http\Controllers\PasswordResetLinkController::class, 'create'])
            ->name('admin.password.request');
        Route::post('forgot-password', [Laravel\Fortify\Http\Controllers\PasswordResetLinkController::class, 'store'])
            ->name('admin.password.email');

        Route::get('reset-password/{token}', [Laravel\Fortify\Http\Controllers\NewPasswordController::class, 'create'])
            ->name('admin.password.reset');
        Route::post('reset-password', [Laravel\Fortify\Http\Controllers\NewPasswordController::class, 'store'])
            ->name('admin.password.update');
    });

    // Authenticated Admin Routes
    Route::middleware('auth:admin')->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('Admin/Dashboard');
        })->name('admin.dashboard');

        // Password Confirmation
        Route::get('confirm-password', [\Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::class, 'show'])
            ->name('admin.password.confirm');

        Route::post('confirm-password', [\Laravel\Fortify\Http\Controllers\ConfirmablePasswordController::class, 'store']);
        
        Route::post('logout', [Laravel\Fortify\Http\Controllers\AuthenticatedSessionController::class, 'destroy'])->name('admin.logout');
    });
});

require __DIR__.'/settings.php';
require __DIR__.'/admin-settings.php';
