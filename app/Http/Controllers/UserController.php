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
        $e = $this->validation($r);
        if (sizeof($e) === 0) {
            //

            return response()->json(['message' => __('commons.response.success....')]);
        }
        return response()->json($e, 422);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @see Controller
     */
    public function list(Request $request)
    {
        return response()->json([
            'items' => $this->pagination($request, 'App\User', 'infos')
        ]);
    }
}
