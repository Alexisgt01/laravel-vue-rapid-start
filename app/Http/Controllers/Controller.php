<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    /**
     * define rules in controllers;
     * @var array
     */
    protected $rules = [];

    /**
     * define message in controllers or here;
     * @var array
     */
    protected $messages = [];


    public function __construct()
    {
        //fc
        $this->messages = [
            'name.require' => __('commons.form.validation.require'),
            'name.max'     => __('commons.form.validation.max', ['nb' => 255]),
        ];
    }

    /**
     * @param Request $request
     * @param $model
     * @param $stringify
     * @return \Illuminate\Http\JsonResponse
     */
    protected function pagination(Request $request, $model, string $stringify)
    {
        $modelSortBy = explode('__', $request->query('sort'))[0];
        $tableSortBy = explode('__', $request->query('sort'))[1];
        $query       = $request->query();
        $direction   = $request->query('direction');
        try {
            if ($modelSortBy === $stringify):
                $model->orderBy($tableSortBy, $direction);
            else:
                // TODO : else sort by relationship
                // @see : https://stackoverflow.com/questions/59806135/laravel-how-to-sort-by-related-model-with-pagination-filter
            endif;

            foreach (array_keys($query) as $q) {
                if (strpos($q, 'search__') === 0) {
                    $modelSearchBy = explode('__', $q)[1];
                    $tableSearchBy = explode('__', $q)[2];
                    $valueSearchBy = $query[$q];
                    if ($tableSearchBy === 'created_at') {
                        // TODO : handling date format
                    }
                    if ($modelSearchBy === 'user'):
                        $model->where($tableSearchBy, 'like', $valueSearchBy . '%');
                    else:
                        $model->whereHas($modelSearchBy, function (Builder $q) use ($valueSearchBy, $tableSearchBy) {
                            $q->where($tableSearchBy, 'like', $valueSearchBy . '%');
                        });
                    endif;
                }
            }
            return $model->paginate(intval($request->query('limit')))->toArray();
        } catch (Exception $e) {
            return response()->json(['message' => $e], 400);
        }
    }

    protected function validation(Request $request)
    {
        $input = $request->all();

        $e = Validator::make($input, $this->rules, $this->messages);

        $errors = [];
        foreach ($e->errors()->getMessages() as $key => $message):
            array_push($errors, [
                'field'   => __('commons.form.') . $key,
                'message' => $message
            ]);
        endforeach;
        return $errors;
    }

    protected function validator($r, $callable)
    {
        $e = $this->validation($r);
        if (sizeof($e) === 0) {
            return $callable();
        }
        return response()->json(['message' => $e], 422);
    }
}
