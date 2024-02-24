<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\VisitelWitel;
use App\Models\VisitelRole;
use App\Models\VisitelAmType;
use App\Models\VisitelClient;
use App\Models\VisitelReport;
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
        VisitelAmType::create([
            'name'=>'NOT A AM',
            'description'=>'...',
        ]);


        // USER
        // VisitelUser::factory(env('JML_USER'))->create();
        VisitelUser::create([
            'name' => 'ZUL FADLI AHMAD',
            'email' => '60200121101@uin-alauddin.ac.id',
            'email_verified_at' => NULL,
            'password' => NULL,
            'google_id' => '102764546989887452010',
            'google_token' => 'ya29.a0AfB_byBzwdRk3fpZIb4-4bwAIcuCMOS45Up6tD1rAx_KsH7JvVJTri8rRI5qW0qmKqRgmSRi7txSRawFQ_wJH4QgEdYGpg5tXcHAddIM6_rBqF5ps-FDyv8gpj7yD0_PCZVNcASKgNtjUN-yRD5i7_zepMJhVi5UhRFnaCgYKAe4SARESFQHGX2MiE_yXkj2iwZ-_MOPaQacV-A0171',
            'google_refresh_token' => 'NULL',
            'google_picture' => 'https://lh3.googleusercontent.com/a/ACg8ocL4wr_MLap6RQLFop1Q0CtwIJQryQuF_bcBB4OZXBuqa6c=s96-c',
            'visitel_witels_id' => 3,
            'visitel_roles_id' => 1,
            'visitel_am_types_id' => 4,
            'remember_token' => NULL,
            // 'deleted_at' => '',
            // 'created_at' => '',
            // 'updated_at' => '',
        ]);
        VisitelUser::create([
            'name' => 'Zul Fadli Ahmad',
            'email' => 'zulfadli15903@gmail.com',
            'email_verified_at' => NULL,
            'password' => NULL,
            'google_id' => '107910530552477131962',
            'google_token' => 'ya29.a0AfB_byAUHPVRJg_zqhvstAt8__sOeo_08Fu4NbaeX3V1oOUp32bCVgyPhk_ow_mn9B3WkhjiSjOq4F8e7KYByTbhmL77GFAgPBdP0CheKNIkZm2MpZBMLFeUQLS2nUw9fF7JBS4Jp4PO7mdYhkP9fE8j2jYbK69Wxh_naCgYKARgSARASFQHGX2MiXITv2JgVRFw-6c5hQ8rJ0A0171',
            'google_refresh_token' => NULL,
            'google_picture' => 'https://lh3.googleusercontent.com/a/ACg8ocKLq7ybE4Y8V2nUCaYenRJLtTEFHxiIbu5RKekL2Cq11Q0=s96-c',
            'visitel_witels_id' => 3,
            'visitel_roles_id' => 2,
            'visitel_am_types_id' => 3,
            'remember_token' => NULL,
            // 'deleted_at' => '',
            // 'created_at' => '',
            // 'updated_at' => '',
        ]);
        VisitelUser::create([
            'name' => 'ISVENT SCOUT',
            'email' => 'isventscout@gmail.com',
            'email_verified_at' => NULL,
            'password' => NULL,
            'google_id' => '107910530552477131962',
            'google_token' => 'ya29.a0AfB_byCWhuGd2TviWq8vNb5-lifxwGgiz8fjlMKiPPPHDMdRikEobf7uGvspQeDl2GvvoRxvQUWCY6O13D11yOoKw2BmpD5Y7TbXfZHUD-gZh7-Pf60Xcs0h-fOtOM2Q-YrfSICxZTT32M92xfBsBqXBhsjeMAOc88TCaCgYKAckSARESFQHGX2Mi2kIIz5X4TjkaqyXGJCGOnA0171',
            'google_refresh_token' => NULL,
            'google_picture' => 'https://lh3.googleusercontent.com/a/ACg8ocKLq7ybE4Y8V2nUCaYenRJLtTEFHxiIbu5RKekL2Cq11Q0=s96-c',
            'visitel_witels_id' => 3,
            'visitel_roles_id' => 2,
            'visitel_am_types_id' => 2,
            'remember_token' => NULL,
            // 'deleted_at' => '',
            // 'created_at' => '',
            // 'updated_at' => '',
        ]);


        // CLIENT
        VisitelClient::factory(env('JML_CLIENT'))->create();


        // REPORT
        VisitelReport::factory(env('JML_REPORT'))->create();
    }
}
