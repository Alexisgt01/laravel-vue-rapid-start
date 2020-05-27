<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{


    protected $users = [
        [
            'name'     => 'Admin',
            'email'    => 'admin@test.fr',
            'password' => 'test',
        ],
        //
    ];

    protected $maxFake = 100;

    public function run()
    {

        $faker = \Faker\Factory::create();
        foreach ($this->users as $u):
            $id = DB::table('users')->insertGetId([
                'name'       => $u['name'],
                'email'      => $u['email'],
                'password'   => \Illuminate\Support\Facades\Hash::make($u['password']),
                'created_at' => \Carbon\Carbon::now(),
            ]);

            DB::table('users_infos')->insert([
                'user_id'    => $id,
                'created_at' => \Carbon\Carbon::now(),
            ]);
        endforeach;

        for ($i = 0; $i < $this->maxFake; $i++) {
            echo $i . '/' . $this->maxFake . "\n";
            $id = DB::table('users')->insertGetId([
                'name'       => $faker->name,
                'email'      => $faker->email,
                'password'   => \Illuminate\Support\Facades\Hash::make($faker->password),
                'created_at' => \Carbon\Carbon::now(),
            ]);

            DB::table('users_infos')->insert([
                'user_id'    => $id,
                'created_at' => \Carbon\Carbon::now(),
            ]);
        }
    }
}
