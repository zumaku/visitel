<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\VisitelWitel;
use App\Models\VisitelRole;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // WITEL
        VisitelWitel::factory(10)->create();


        // ROLE
        VisitelRole::create([
            'name'=>'Manager',
            'description'=>"Manajer adalah individu yang bertanggung jawab atas pengelolaan tim atau departemen dalam sebuah organisasi. Peran manajer seringkali melibatkan pengambilan keputusan strategis, perencanaan, pengorganisasian, pengawasan, dan pengendalian operasi sehari-hari yang terkait dengan tim atau departemen yang mereka pimpin. Beberapa tanggung jawab kunci dari seorang manajer meliputi: 1. Perencanaan Strategis, 2. Pengorganisasian, 3. Pengawasan, 4. Pengembangan Tim, dan 5. Koordinasi."
        ]);
        VisitelRole::create([
            'name'=>'Account Manager',
            'description'=>"Account Manager adalah individu yang bertanggung jawab atas hubungan dengan pelanggan atau akun tertentu dalam organisasi. Peran Account Manager fokus pada membangun, memelihara, dan meningkatkan hubungan dengan klien atau pelanggan. Mereka bertanggung jawab atas kepuasan pelanggan dan memastikan bahwa kebutuhan dan harapan pelanggan terpenuhi. Beberapa tanggung jawab kunci dari seorang Account Manager meliputi: 1. Manajemen Hubungan Pelanggan, 2. Penjualan dan Pemasaran, 3. Pengelolaan Akun, 4. Pemecahan Masalah, dan 5. Pelaporan."
        ]);


        
    }
}
