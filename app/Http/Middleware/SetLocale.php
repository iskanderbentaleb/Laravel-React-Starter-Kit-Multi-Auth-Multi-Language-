<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class SetLocale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->cookie('app_locale');

        if ($locale && in_array($locale, ['en', 'ar', 'fr'])) {
            app()->setLocale($locale);
        } else {
            // Optional: fallback to browser language if cookie not set
            $preferred = $request->getPreferredLanguage(['en', 'ar', 'fr']);
            if ($preferred) {
                app()->setLocale($preferred);
            }
        }

        return $next($request);
    }
}
