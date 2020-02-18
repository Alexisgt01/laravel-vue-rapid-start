<?php

namespace App\Providers;

use App\Comment;
use App\Media;
use App\Observers\CommentObserver;
use App\Observers\MediaObserver;
use App\Observers\TicketObserver;
use App\Ticket;
use Illuminate\Support\ServiceProvider;
use App\User;
use App\Observers\UserObserver;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
