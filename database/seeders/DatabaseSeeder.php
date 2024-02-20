<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\VisitelWitel;
use App\Models\VisitelRole;
use App\Models\VisitelAmType;
use App\Models\VisitelClient;
use App\Models\VisitelUser;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // WITEL
        VisitelWitel::factory(env('JML_WITEL'))->create();


        // ROLE
        VisitelRole::create([
            'name'=>'Manager',
            'description'=>"Manajer adalah individu yang bertanggung jawab atas pengelolaan tim atau departemen dalam sebuah organisasi. Peran manajer seringkali melibatkan pengambilan keputusan strategis, perencanaan, pengorganisasian, pengawasan, dan pengendalian operasi sehari-hari yang terkait dengan tim atau departemen yang mereka pimpin. Beberapa tanggung jawab kunci dari seorang manajer meliputi: 1. Perencanaan Strategis, 2. Pengorganisasian, 3. Pengawasan, 4. Pengembangan Tim, dan 5. Koordinasi."
        ]);
        VisitelRole::create([
            'name'=>'Account Manager',
            'description'=>"Account Manager adalah individu yang bertanggung jawab atas hubungan dengan pelanggan atau akun tertentu dalam organisasi. Peran Account Manager fokus pada membangun, memelihara, dan meningkatkan hubungan dengan klien atau pelanggan. Mereka bertanggung jawab atas kepuasan pelanggan dan memastikan bahwa kebutuhan dan harapan pelanggan terpenuhi. Beberapa tanggung jawab kunci dari seorang Account Manager meliputi: 1. Manajemen Hubungan Pelanggan, 2. Penjualan dan Pemasaran, 3. Pengelolaan Akun, 4. Pemecahan Masalah, dan 5. Pelaporan."
        ]);


        // AM TYPE
        VisitelAmType::create([
            'name'=>'Divisi Goverment Srvice',
            'description'=>'Divisi Pelayanan Pemerintah bertanggung jawab untuk menyediakan solusi teknologi informasi dan layanan terkait kepada berbagai lembaga pemerintah. Divisi ini berfokus pada pengembangan sistem, aplikasi, dan infrastruktur yang mendukung kebutuhan unik dan kompleks dari lembaga pemerintah. Layanan yang disediakan dapat mencakup pengembangan perangkat lunak khusus, integrasi sistem, manajemen data, dan dukungan teknis secara umum.',
        ]);
        VisitelAmType::create([
            'name'=>'Divisi Enterprice Srvice',
            'description'=>'Divisi Pelayanan Enterprise merupakan unit bisnis yang menawarkan solusi teknologi informasi kepada perusahaan-perusahaan besar atau enterprise. Fokus utama dari divisi ini adalah memberikan layanan yang memenuhi kebutuhan teknologi dan bisnis khusus dari perusahaan besar, seperti sistem manajemen perusahaan, keamanan informasi, analisis data tingkat tinggi, dan integrasi sistem perusahaan secara menyeluruh.',
        ]);
        VisitelAmType::create([
            'name'=>'Divisi Bissunes Srvice',
            'description'=>'Divisi Pelayanan Bisnis bertanggung jawab atas menyediakan solusi teknologi informasi dan layanan terkait kepada berbagai jenis bisnis, mulai dari usaha kecil hingga menengah. Fokus dari divisi ini adalah membantu bisnis dalam meningkatkan efisiensi, produktivitas, dan kinerja mereka melalui pemanfaatan teknologi informasi. Layanan yang disediakan oleh divisi ini mungkin mencakup pengembangan situs web, aplikasi mobile, sistem manajemen pelanggan (CRM), e-commerce, dan konsultasi IT untuk bisnis.',
        ]);


        // USER
        VisitelUser::factory(env('JML_USER'))->create();


        // CLIENT
        VisitelClient::factory(env('JML_CLIENT'))->create();
    }
}
