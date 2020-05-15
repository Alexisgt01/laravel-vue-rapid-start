<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{

    /**
     * check if user is auth
     * @return \Illuminate\Http\JsonResponse
     */
    public function check()
    {
        if (Auth::guard()->check()) {
            return $this->respondWithToken(null);
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
            'message' => __('commons.response.success.login', ['user' => Auth::guard()->user()->name])
        ]);
    }

    /**
     * Logout
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        if (Auth::guard()->user()):
            Auth::guard()->logout();
        endif;
        return response()->json(['message' => __('commons.response.success.logout')], 200);
    }
}
