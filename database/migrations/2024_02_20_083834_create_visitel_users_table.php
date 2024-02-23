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
        Schema::create('visitel_users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password')->nullable();
            $table->string('google_id');
            $table->string('google_token');
            $table->string('google_refresh_token')->nullable();
            $table->string('google_picture');

            // Hapus nullable fk nya nanti
            $table->foreignId('visitel_witels_id')->constrained();
            $table->foreignId('visitel_roles_id')->constrained();
            $table->foreignId('visitel_am_types_id')->constrained();

            $table->rememberToken();
            $table->softDeletes($column = 'deleted_at', $precision = 0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('visitel_users');
    }
};
