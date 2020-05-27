<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    private $max = 100;

    public function run()
    {
        $fake = \Faker\Factory::create();
        for ($i = 0; $i < $this->max; $i++) {
            echo explode('\\', get_class())[sizeof(explode('\\', get_class())) - 1] . ' = ' . $i . '/' . $this->max . "\n";
            \Illuminate\Support\Facades\DB::table('posts')->insert([
                'title'   => $fake->realText(rand(16, 32)),
                'body'    => $fake->realText(rand(100, 500)),
                'user_id' => \App\User::all()->random(1)->first()->id,
            ]);
        }
    }
}
