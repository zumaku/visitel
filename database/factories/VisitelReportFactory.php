<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VisitelReport>
 */
class VisitelReportFactory extends Factory
{
    private $layananTelkom = [
        'Layanan Internet' => [
            'Astinet',
            'Digi Connect',
            'Mangoesky',
            'Astinet LITE',
            'Indihome',
            'IP Transit',
            'Wifi Station',
            'WiCo'
        ],
        'Layanan Solusi' => [
            'UmeetMe',
            'Agree',
            'BPR Satu',
            'Digi Clinic',
            'Digi Hotel',
            'Digi Toc',
            'Lab FO',
            'Pijar Sekolah',
            'Smart Water Meter',
            'Anteres',
            'Sakoo',
            'QRen',
            'Bonum',
            'PaDi UMKM',
            'Digi ERO'
        ]
    ];

    private $layananKompetitor = [
        'Layanan Internet' => [
            'NetFiber',
            'SkyNet',
            'GlobalNet',
            'NetConnect',
            'WiMax',
            'FiberLink',
            'NetStream',
            'AirNet'
        ],
        'Layanan Solusi' => [
            'TechMeet',
            'BizSolution',
            'DataClinic',
            'SmartTech',
            'ConnectPro',
            'TechSolutions',
            'InnovateBiz',
            'ProNet',
            'InfoLab',
            'SoluNet',
            'SmartConnect',
            'TechEdge',
            'InnoLab',
            'BizLink'
        ]
    ];
    


    private function generateRandomServices($layananTelkom) {
        $randomServices = [];
        
        foreach ($layananTelkom as $jenisLayanan => $layanan) {
            // Ambil 1 layanan acak dari setiap jenis layanan
            $randomService = $layanan[array_rand($layanan)];
            $randomServices[] = $randomService;
        }
    
        // Gabungkan data menjadi satu string dengan dipisahkan oleh koma
        $result = implode(', ', $randomServices);
    
        return $result;
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $random_user_id = rand(1,env('JML_USER'));
        $random_client_id = rand(1,env('JML_CLIENT'));
        
        $status = "";
        switch (rand(1,3)){
            case  1:
                $status = "Not Started";
                break;
            case  2:
                $status = "In Proggress";
                break;
            case  3:
                $status = "Done";
                break;
            default:
                $status = "Not Started";
        }

        $ups_or_sus = "";
        if(rand(0,1) == 1) $ups_or_sus = "Upscale";
        else $ups_or_sus = "Sustain";

        $random_amount = rand(20, 400) + "000000";

        $activity = "";
        switch (rand(1,3)){
            case  1:
                $activity = "Opertunity";
                break;
            case  2:
                $activity = "Dealing";
                break;
            case  3:
                $activity = "Visid CC";
                break;
            default:
                $activity = "Opertunity";
        }

        $content = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu posuere turpis. Nullam tempus maximus orci placerat auctor. Donec euismod, sem vehicula dapibus suscipit, tortor est ornare sem, a consectetur dolor dolor ac dui. Nam volutpat rutrum dolor, ut congue justo feugiat et. Nam sagittis ornare justo, nec hendrerit mi consequat in. Nulla auctor, quam et blandit ultrices, felis dolor tempus mi, ut posuere lacus ex in nunc. Vivamus tincidunt odio enim, eu dapibus felis interdum non. Nam cursus dui at erat congue iaculis. Sed sagittis, ante eu dictum rutrum, neque quam luctus magna, eget vestibulum nisl massa et ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis, diam eu efficitur facilisis, turpis dui faucibus massa, id tristique lacus nunc quis augue.</p><img src="https://source.unsplash.com/1280x720/?company,bissuness" alt="search terms"><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p><ul><li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li><li>Aliquam tincidunt mauris eu risus.</li><li>Vestibulum auctor dapibus neque.</li></ul><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>';

        return [
            'name' => 'Laporan #' . rand(1, env('JML_REPORT')),
            'slug' => fake()->slug(2),
            'date'=>fake()->dateTimeBetween('-4 week', '+1 week'),
            'visitel_users_id'=>$random_user_id,
            'visitel_clients_id'=>$random_client_id,
            'status'=>$status,
            'ups_or_sus'=>$ups_or_sus,
            'amount'=>$random_amount,
            'activity'=>$activity,
            'potential_product'=>$this->generateRandomServices($this->layananTelkom),
            'info_competitor'=>$this->generateRandomServices($this->layananKompetitor),
            'content'=>$content,
        ];
    }
}
