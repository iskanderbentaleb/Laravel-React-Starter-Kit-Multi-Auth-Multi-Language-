<?php

use App\Http\Controllers\Admin\Settings\PasswordController;
use App\Http\Controllers\Admin\Settings\ProfileController;
use App\Http\Controllers\Admin\Settings\TwoFactorAuthenticationController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('admin')->middleware(['auth:admin'])->group(function () {
    Route::redirect('settings', '/admin/settings/profile');

    Route::get('settings/profile', [ProfileController::class, 'edit'])->name('admin.profile.edit');
    Route::patch('settings/profile', [ProfileController::class, 'update'])->name('admin.profile.update');
    Route::delete('settings/profile', [ProfileController::class, 'destroy'])->name('admin.profile.destroy');

    Route::get('settings/password', [PasswordController::class, 'edit'])->name('admin.user-password.edit');

    Route::put('settings/password', [PasswordController::class, 'update'])
        ->middleware('throttle:6,1')
        ->name('admin.user-password.update');

    Route::get('settings/appearance', function () {
        return Inertia::render('Admin/Settings/Appearance');
    })->name('admin.appearance.edit');

    Route::get('settings/two-factor', [TwoFactorAuthenticationController::class, 'show'])
        ->name('admin.two-factor.show');

    // 2FA Routes for Admin
    Route::post('user/two-factor-authentication', [\Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::class, 'store'])
        ->name('admin.two-factor.enable');
    Route::delete('user/two-factor-authentication', [\Laravel\Fortify\Http\Controllers\TwoFactorAuthenticationController::class, 'destroy'])
        ->name('admin.two-factor.disable');
    Route::get('user/two-factor-qr-code', [\Laravel\Fortify\Http\Controllers\TwoFactorQrCodeController::class, 'show'])
        ->name('admin.two-factor.qr-code');
    Route::get('user/two-factor-secret-key', [\Laravel\Fortify\Http\Controllers\TwoFactorSecretKeyController::class, 'show'])
        ->name('admin.two-factor.secret-key');
    Route::get('user/two-factor-recovery-codes', [\Laravel\Fortify\Http\Controllers\RecoveryCodeController::class, 'index'])
        ->name('admin.two-factor.recovery-codes');
    Route::post('user/two-factor-recovery-codes', [\Laravel\Fortify\Http\Controllers\RecoveryCodeController::class, 'store'])
        ->name('admin.two-factor.regenerate-recovery-codes');
    Route::post('user/confirmed-two-factor-authentication', [\Laravel\Fortify\Http\Controllers\ConfirmedTwoFactorAuthenticationController::class, 'store'])
        ->name('admin.two-factor.confirm');
});
