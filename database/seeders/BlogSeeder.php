<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Blog;
class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        \DB::table('blogs')->insert([
            [
                'text' => 'Integer porttitor, metus eu auctor consectetur',
                'date' => '08/05/2017',
                'image' => 'blog1.png'
            ],[
                'text' => 'Integer porttitor, metus eu auctor',
                'date' => '08/05/2020',
                'image' => 'blog2.png'
            ],[
                'text' => 'Integer porttitor, metus consectetur',
                'date' => '08/05/2021',
                'image' => 'blog3.png'
            ],
        ]);
    }
}
