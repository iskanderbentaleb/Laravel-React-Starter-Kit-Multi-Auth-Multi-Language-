<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Fortify Options
    |--------------------------------------------------------------------------
    |
    | This file provides additional configuration options for Laravel Fortify
    | that are not present in the default configuration file.
    |
    */

    'two-factor-authentication' => [
        // The number of seconds to allow the two-factor authentication code to be valid.
        // A window of 40 covers approx 20 minutes (20 before, 20 after).
        // This is a temporary workaround for 17-minute clock drift.
        'window' => 40,
        'confirm' => true,
        'confirmPassword' => true,
    ],

];
