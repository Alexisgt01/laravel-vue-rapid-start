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
Route::post('logout', 'AuthController@logout');

Route::get('auth/check', 'AuthController@check');

Route::group(['middleware' => ['jwt']], function () {
    /**
     * User
     */
    Route::get('user/list', 'UserController@list');

    /**
     * Post
     */
    Route::get('post/list', 'PostController@list');
});
