<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ShareSessionData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        $sessionData = [
            'message' => $request->session()->get('message')
        ];

        // Share session data with Inertia
        \Inertia\Inertia::share($sessionData);

        return $next($request);
    }
}
