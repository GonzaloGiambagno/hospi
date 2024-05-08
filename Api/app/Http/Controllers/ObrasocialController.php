<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ObrasocialController extends Controller
{
    public function index()
    {
        $planes = DB::connection('sqlsrv')->table('MM_PLAN as a')
            ->select('a.NOMBRE as nombre_plan', 'b.NOMBRE as nombre_obra_social', 'a.ci_web')
            ->join('MM_OBRA_SOCIAL as b', 'a.COD_OBRA_SOCIAL', '=', 'b.COD_OBRA_SOCIAL')
            ->where('a.CI_ESTADO', 2)
            ->where('b.CI_ESTADO', 2)
            ->where('a.ci_web', 1)
            ->orderBy('a.NOMBRE', 'asc')
            ->get();

        return response()->json($planes);
    }
}
