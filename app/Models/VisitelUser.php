<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class VisitelUser extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',

        'google_id',
        'google_token',
        'google_refresh_token',
        'google_picture',

        'visitel_witels_id',
        'visitel_roles_id',
        'visitel_am_types_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function visitel_role()
    {
        return $this->belongsTo(VisitelRole::class);
    }

    public function visitel_witel()
    {
        return $this->belongsTo(VisitelWitel::class);
    }

    public function visitel_am_type()
    {
        return $this->hasOne(VisitelAmType::class);
    }

    public function visitel_clients()
    {
        return $this->belongsToMany(VisitelClient::class);
    }

    public function visitel_reports()
    {
        return $this->hasMany(VisitelReport::class);
    }
}
