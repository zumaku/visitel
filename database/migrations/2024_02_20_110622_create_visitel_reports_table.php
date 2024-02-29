<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('visitel_reports', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->string('slug', 255);
            $table->date('date');
            $table->foreignId('visitel_users_id')->constrained();
            $table->foreignId('visitel_clients_id')->constrained();
            $table->string('status', 255);
            $table->string('ups_or_sus', 255);
            $table->string('amount', 255);
            $table->string('activity', 255);
            $table->string('potential_product', 255)->nullable();
            $table->string('info_competitor', 255)->nullable();
            $table->text('content')->nullable();
            $table->softDeletes($column = 'deleted_at', $precision = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visitel_reports');
    }
};
