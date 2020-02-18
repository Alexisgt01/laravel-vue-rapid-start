<?php

namespace App\Http\Controllers;

use App\Client;
use App\Group;
use App\Utils\Utils;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Registration;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    /**
     * check if user is auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function check()
    {
        if (Auth::check()) {
            return response()->json(['user' => Auth::User()->id]);
        }
        return response()->json(false);
    }

    /**
     * login
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {

        $credentials = $request->only('email', 'password');

        if ($token = Auth::guard()->attempt($credentials)) {
            return $this->respondWithToken($token);

        }

        return response()->json(['message' => __('commons.response.error.login')], 401);
    }

    /**
     * data returned
     * @param $token
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'auth'         => true,
            'me'           => Auth::guard()->user(),
        ]);
    }

    /**
     * Logout
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        if (Auth::check()):
            Auth::logout();
        endif;
        return response()->json(['message' => __('commons.response.success.logout')], 200);
    }
}
