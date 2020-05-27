<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class UserController extends Controller
{
    protected $rules = [
        'name' => 'required|max:255',
    ];

    /**
     * add a new user
     * @param Request $r
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $r)
    {
        return $this->validator($r, function () use ($r) {
            //
            return response()->json(['message' => __('commons.response.success....')]);
        });

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @see Controller
     */
    public function list(Request $request)
    {
        return response()->json([
            'items' => $this->pagination($request, User::with('infos'), 'user')
        ]);
    }
}
