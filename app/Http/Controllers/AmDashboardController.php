<?php

namespace App\Http\Controllers;

use App\Models\VisitelClient;
use Inertia\Inertia;
use App\Models\VisitelReport;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

use function Termwind\render;

class AmDashboardController extends Controller
{
    // ================ Get Data Method ================

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

    private function getClientData(){
        $user = Auth::user();
        return VisitelClient::where('visitel_witel_id', $user->visitel_witels_id)->get();
    }


    // ================ Create Data Method ================

    public function storeImage(Request $request) {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);
        
        $imageName = time() . '_' . $request->file('image')->getClientOriginalName();
        $request->file('image')->storeAs('public/img', $imageName);
        $imageUrl = asset('storage/img/' . $imageName);
        return response()->json([
            'imageUrl' => $imageUrl,
            'imageName' => $imageName
        ]);
    }

    public function destroyImage(Request $request) {
        $request->validate([
            'imageName' => 'required|string',
        ]);

        $imageName = $request->imageName;

        try {
            Storage::delete('public/img/' . $imageName);
            return response()->json([
                'message' => 'Gambar berhasil dihapus',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'error' => 'Gagal menghapus gambar: ' . $e->getMessage(),
            ], 500);
        }
    }

    public function createLaporanBaru(Request $request){
        $user = Auth::user();

        $validatedData = $request->validate([
            'name' => 'required|string',
            'slug' => 'required|string',
            'date' => 'required|date',
            'visitel_clients_id' => 'required|numeric',
            'status' => 'in:Terencana,Proses,Selesai',
            'ups_or_sus' => 'required|in:Upscale,Sustain',
            'amount' => 'required|numeric',
            'activity' => 'in:Opportunity,Dealing,Visid CC',
            'potential_product' => 'string',
            'info_competitor' => 'string',
            'content' => 'string'
        ]);

        try {
            $report = new VisitelReport();
            $report->name = $validatedData['name'];
            $report->slug = $validatedData['slug'];
            $report->date = $validatedData['date'];
            $report->visitel_users_id = $user->id;
            $report->visitel_clients_id = $validatedData['visitel_clients_id'];
            $report->status = $validatedData['status'];
            $report->ups_or_sus = $validatedData['ups_or_sus'];
            $report->amount = $validatedData['amount'];
            $report->activity = $validatedData['activity'];
            $report->potential_product = $validatedData['potential_product'];
            $report->info_competitor = $validatedData['info_competitor'];
            $report->content = $validatedData['content'];
            $report->save();

            return response()->json(['message' => 'Laporan berhasil dibuat'], 201);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Gagal membuat laporan', 'error' => $e->getMessage()], 500);
        }
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

    public function addLaporan() {
        return Inertia::render('LaporanBaru', [
            'clients' => $this->getClientData(),
        ]);
    }
}
