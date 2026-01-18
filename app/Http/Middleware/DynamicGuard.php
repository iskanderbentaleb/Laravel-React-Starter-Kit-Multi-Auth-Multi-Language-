<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Config;

class DynamicGuard
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->is('admin*')) {
            // If logged in as User, but trying to access Admin login, redirect back to user dashboard
            if (auth()->guard('web')->check() && ($request->is('admin/login') || $request->is('admin/two-factor-challenge'))) {
                return redirect()->route('dashboard');
            }

            Config::set('fortify.guard', 'admin');
            Config::set('fortify.passwords', 'admins');
            Config::set('auth.defaults.guard', 'admin');
            auth()->shouldUse('admin');
        } else {
            // If logged in as Admin, but trying to access User login, redirect back to admin dashboard
            if (auth()->guard('admin')->check() && ($request->is('login') || $request->is('two-factor-challenge'))) {
                return redirect()->route('admin.dashboard');
            }

            Config::set('fortify.guard', 'web');
            Config::set('fortify.passwords', 'users');
            Config::set('auth.defaults.guard', 'web');
            auth()->shouldUse('web');
        }

        return $next($request);
    }
}
