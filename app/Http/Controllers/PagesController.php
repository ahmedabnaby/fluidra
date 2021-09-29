<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    public function layout()
    {
        return view('layout.app');
    }
}
