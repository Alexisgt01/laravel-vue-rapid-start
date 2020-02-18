<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('login', 'AuthController@login');
Route::get('auth/check', 'AuthController@check');
Route::get('logout', 'AuthController@logout');

Route::group(['middleware' => ['jwt']], function () {
    Route::get('user/list', 'UserController@list');
});
