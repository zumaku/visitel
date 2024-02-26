<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VisitelRole extends Model
{
    use HasFactory;

    public function visitel_user()
    {
        return $this->hasOne(VisitelUser::class);
    }
}
