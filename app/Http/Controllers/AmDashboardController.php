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
    private function getAllReportData(){
        $user = Auth::user();
        return VisitelReport::with('visitel_client')
                ->where('visitel_users_id', $user->id)
                ->orderBy('date', 'desc')
                ->get(['id', 'visitel_clients_id', 'name', 'slug', 'status', 'date', 'ups_or_sus', 'amount', 'activity']);
    }

    private function getLimitReportData($limit){
        $user = Auth::user();
        return VisitelReport::with('visitel_client')
                ->where('visitel_users_id', $user->id)
                ->limit($limit)
                ->orderBy('date', 'desc')
                ->get(['id', 'visitel_clients_id', 'name', 'slug', 'status', 'date', 'ups_or_sus', 'amount', 'activity']);
    }

    private function getReportData($slug){
        $user = Auth::user();
        return VisitelReport::with('visitel_client')
                            ->where('visitel_users_id', $user->id)
                            ->where('slug', $slug)
                            ->first();
    }


    // ================ Pages Method ================
    
    public function index() {
        // dd($this->getAllReportData());
        return Inertia::render('AmDashboard', [
            'laporan_terbaru' => $this->getLimitReportData(3),
            'semua_laporan' => $this->getAllReportData(),
        ]);
    }

    public function laporan() {
        return Inertia::render('AmLaporan', [
            'semua_laporan' => $this->getAllReportData(),
        ]);
    }

    public function readLaporan($slug) {
        return Inertia::render('Laporan', [
            'laporan' => $this->getReportData($slug),
        ]);
    }
}
