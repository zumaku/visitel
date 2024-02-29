<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\VisitelClient>
 */
class VisitelClientFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = "";
        $random_status = rand(1,3);
        $random_witel = rand(1,env('JML_WITEL'));

        switch ($random_status) {
            case 1:
                $status = "Client Lama";
                break;
            case 2:
                $status = "Client Baru";
                break;
            case 3:
                    $status = "Calon Client";
                break;
            default:
                $status = "Client Lama";
        }

        return [
            'name'=>fake()->company(),
            'slug'=>fake()->slug(),
            'description'=>fake()->paragraph(),
            'location'=>fake()->address(),
            'status'=>$status,
            'visitel_witels_id'=>$random_witel,
        ];
    }
}
