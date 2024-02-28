<?php

namespace App\Http\Controllers;

use App\Models\VisitelReport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class LaporanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }
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

    /**
     * Display the specified resource.
     */
    public function show(VisitelReport $visitelReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(VisitelReport $visitelReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, VisitelReport $visitelReport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(VisitelReport $visitelReport)
    {
        //
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
}
