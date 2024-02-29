<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitelReport extends Model
{
    use HasFactory;

    protected $table = 'visitel_reports';

    protected $fillable = [
        'name',
        'slug',
        'date',
        'visitel_users_id',
        'visitel_clients_id',
        'status',
        'ups_or_sus',
        'amount',
        'potential_product',
        'info_competitor',
        'content',
    ];

    public function client()
    {
        return $this->belongsTo(VisitelClient::class, 'visitel_clients_id');
    }

    public function user()
    {
        return $this->belongsTo(VisitelUser::class, 'visitel_users_id');
    }
}


// Model VisitelUser berelasi one to one dengan model VisitelRole
// Model VisitelWitel berelasi one to many dengan model  VisitelUser
// Model VisitelWitel berelasi one to many dengan model  VisitelClient
// Model VisitelUser berelasi one to many dengan model  VisitelReport
// Model VisitelClient berelasi one to many dengan model  VisitelReport
// Model VisitelUser berelasi one to one dengan model  VisitelAmType