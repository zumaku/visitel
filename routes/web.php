<?php

use App\Http\Controllers\AmDashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProviderController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/playground', function () {
    return Inertia::render('Playground');
});


// Google Login Route
Route::get('/auth/redirect', [ProviderController::class, 'redirect']);
Route::get('/auth/callback', [ProviderController::class, 'callback']);




Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');
    
Route::get('/dashboard', [AmDashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/laporan', [AmDashboardController::class, 'laporan'])->middleware(['auth', 'verified'])->name('laporan');
Route::get('/laporan/{slug}', [AmDashboardController::class, 'readLaporan'])->middleware(['auth', 'verified'])->name('read_laporan');
Route::get('/laporan-baru/', [AmDashboardController::class, 'addLaporan'])->middleware(['auth', 'verified'])->name('add_laporan');

use Illuminate\Http\Request;


// Upload image editor
Route::post('/upload-image', function (Request $request) {
    // Validasi request
    $request->validate([
        'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    // Simpan gambar ke dalam folder public/img
    $imageName = time() . '_' . $request->file('image')->getClientOriginalName();
    $request->file('image')->storeAs('public/img', $imageName);

    // Kembalikan URL gambar
    $imageUrl = asset('storage/img/' . $imageName);
    return response()->json(['imageUrl' => $imageUrl]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
