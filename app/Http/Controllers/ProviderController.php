<?php

namespace App\Http\Controllers;

use App\Models\VisitelUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller {
    public function redirect() {
        return Socialite::driver('google')->redirect();
    }

    public function callback()  {
        $googleUser = Socialite::driver('google')->user();

        // Nilai random untuk FK nya
        $role = 1;
        $typeAm = 4;
        if($googleUser->email != "60200121101@uin-alauddin.ac.id") {
            $role = 2;
            $typeAm = rand(1,3);
        };
        
        $user = VisitelUser::updateOrCreate([
            'google_id' => $googleUser->id,
        ], [
            'name' => $googleUser->name,
            'email' => $googleUser->email,
            'google_token' => $googleUser->token,
            'google_refresh_token' => $googleUser->refreshToken,
            'google_picture' => $googleUser->user['picture'],

            // Default value untuk FK
            'visitel_witels_id' => 3,
            'visitel_roles_id' => $role,
            'visitel_am_types_id' => $typeAm,
        ]);

        Auth::login($user);

        return redirect('/dashboard');
    }
}
