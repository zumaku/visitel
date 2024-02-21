<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitelReport extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(VisitelUser::class);
    }

    public function client()
    {
        return $this->belongsTo(VisitelClient::class);
    }
}


// Model VisitelUser berelasi one to one dengan model VisitelRole
// Model VisitelWitel berelasi one to many dengan model  VisitelUser
// Model VisitelWitel berelasi one to many dengan model  VisitelClient
// Model VisitelUser berelasi one to many dengan model  VisitelReport
// Model VisitelClient berelasi one to many dengan model  VisitelReport
// Model VisitelUser berelasi one to one dengan model  VisitelAmType