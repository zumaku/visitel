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
        $laporan_terbaru = VisitelReport::where('visitel_users_id', $user_id)
                            ->orderBy('date', 'desc')
                            ->limit(3)
                            ->get(['visitel_clients_id', 'name', 'slug', 'date', 'activity']);

        $laporan_dengan_nama = [];
        foreach ($laporan_terbaru as $laporan) {
            $clientName = VisitelClient::where('id', $laporan->visitel_clients_id)->value('name');
            $laporan_dengan_nama[] = [
                'date' => $laporan->date,
                'name' => $laporan->name,
                'slug' => $laporan->slug,
                'activity' => $laporan->activity,
                'client_id' => $laporan->visitel_clients_id,
                'client_name' => $clientName,
            ];
        }
        // dd($laporan_terbaru);

        return Inertia::render('AmDashboard', [
            'laporanTerbaru' => $laporan_dengan_nama,
        ]);
    }
}
