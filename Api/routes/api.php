<?php

use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\CarouselController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::prefix('auth')->group(function () {
    Route::post('register', [AuthController::class, 'register']);
    Route::post('login', [AuthController::class, 'login']);
});

Route::middleware(['api'])->group(function () {
    Route::post('carousel', [CarouselController::class, 'store']);
    Route::put('carousel/{image}', [CarouselController::class, 'update']);
    Route::delete('carousel/{image}', [CarouselController::class, 'destroy']);
});

// rutas publicas 
Route::get('/carousel', [CarouselController::class, 'index']);
