<?php

namespace App\Http\Controllers;

use App\Models\VisitelClient;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\VisitelReport;
use Illuminate\Support\Facades\Auth;

use function Termwind\render;

class AmDashboardController extends Controller
{
    
    public function index() {
        $user_id = Auth::id();
        $laporan_terbaru = VisitelReport::with('visitel_client')
                            ->where('visitel_users_id', $user_id)
                            ->orderBy('date', 'desc')
                            ->get(['id', 'name', 'slug', 'status', 'date', 'activity']);

        return Inertia::render('AmDashboard', [
            'semua_laporan' => $laporan_terbaru,
        ]);
    }

    public function laporan() {
        $user_id = Auth::id();
        $laporan = VisitelReport::where('visitel_users_id', $user_id)
                    ->orderBy('date', 'desc')
                    ->get(['visitel_clients_id', 'name', 'slug', 'date', 'status', 'amount', 'activity']);
        return Inertia::render('AmLaporan');
    }
}
