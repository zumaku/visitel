<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitelClient extends Model
{
    use HasFactory;

    public function witel()
    {
        return $this->belongsTo(VisitelWitel::class);
    }

    public function users()
    {
        return $this->belongsToMany(VisitelUser::class);
    }

    public function visitel_reports()
    {
        return $this->hasMany(VisitelReport::class, 'visitel_client_id');
    }
}
