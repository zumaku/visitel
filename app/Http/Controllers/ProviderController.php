<?php

namespace App\Http\Controllers;

use App\Models\VisitelUser;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller {
    public function redirect() {
        return Socialite::driver('google')->redirect();
    }

    public function callback()  {
        $googleUser = Socialite::driver('google')->user();
        $user = VisitelUser::where('google_id', $googleUser->id)
                            ->where('email', $googleUser->email)
                            ->first();

        if($user) {
            $user->update([
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'google_token' => $googleUser->token,
                'google_refresh_token' => $googleUser->refreshToken,
                'google_picture' => $googleUser->user['picture'],
            ]);
            
            Auth::login($user);
            return redirect('/dashboard');
        }

        return redirect("/login")->with('message', 'Maaf, Akun anda tidak memiliki akses ke VisiTel!');
        
        
        // =================== Di Bawah Ini Adalah Fungsi Lama =================== 
        
        // $googleUser = Socialite::driver('google')->user();

        // $datauserSekarang = VisitelUser::where('google_id', $googleUser->id)->first();

        // if ($datauserSekarang) echo "Ada"; 
        // else echo "Tidak ada";

        // dd($datauserSekarang, $googleUser);

        // // Nilai random untuk FK nya
        // $role = 1;
        // $typeAm = 4;
        // if($googleUser->email != "60200121101@uin-alauddin.ac.id") {
        //     $role = 2;
        //     $typeAm = rand(1,3);
        // };
        // $user = VisitelUser::updateOrCreate([
        //     'google_id' => $googleUser->id,
        // ], [
        //     'name' => $googleUser->name,
        //     'email' => $googleUser->email,
        //     'google_token' => $googleUser->token,
        //     'google_refresh_token' => $googleUser->refreshToken,
        //     'google_picture' => $googleUser->user['picture'],

        //     // Default value untuk FK
        //     'visitel_witels_id' => 3,
        //     'visitel_roles_id' => $role,
        //     'visitel_am_types_id' => $typeAm,
        // ]);

        // Auth::login($user);

        // return redirect('/dashboard');
    }
}
