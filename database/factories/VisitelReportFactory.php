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
                $status = "Opertunity";
                break;
            case  2:
                $status = "Dealing";
                break;
            case  3:
                $status = "Visid CC";
                break;
            default:
                $status = "Opertunity";
        }

        return [
            'date'=>fake()->date(),
            'visitel_users_id'=>$random_user_id,
            'visitel_clients_id'=>$random_client_id,
            'status'=>$status,
            'ups_or_sus'=>$ups_or_sus,
            'amount'=>$random_amount,
            'activity'=>$activity,
            'potential_product'=>$this->generateRandomServices($this->layananTelkom),
            'info_competitor'=>$this->generateRandomServices($this->layananKompetitor),
            'content'=>fake()->paragraph(),
        ];
    }
}
