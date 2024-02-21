<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitelWitel extends Model
{
    use HasFactory;

    public function users()
    {
        return $this->hasMany(VisitelUser::class);
    }

    public function clients()
    {
        return $this->hasMany(VisitelClient::class);
    }

    public function reports()
    {
        return $this->hasManyThrough(VisitelReport::class, VisitelUser::class);
    }
}
