# laravel-vue-rapid-start

## Installation

``git clone https://github.com/Alexisgt01/laravel-vue-rapid-start.git rapid-spa`` 

``cd rapid-spa``

``copy .env.example .env``

``notepad .env`` or open `.env` file


####  Adapt
```
DB_CONNECTION=mysql 
DB_HOST=127.0.0.1 
DB_PORT=3306 
DB_DATABASE=laravel-vue-rapid-start 
DB_USERNAME=root 
DB_PASSWORD=pass 
```

#### Download dependency


``composer install`` 

``composer dump-autoload``

``npm install --verbose`` 


#### Create the database

``php artisan migrate``

``php artisan db:seed``

#### Generate key

``php artisan jwt:secret``

``php artisan key:generate``


## Start web server

``npm run watch``

Wait ..

`` DONE  Compiled successfully in 9390ms``

In a second terminal

``php artisan serve``

``Laravel development server started: http://127.0.0.1:8000``
 
 Find id/pass and create your own users in 
 
 ``database/seeds/UsersTableSeeder.php``

 ## Update translation in .vue file 

 `php artisan cache:clear`
