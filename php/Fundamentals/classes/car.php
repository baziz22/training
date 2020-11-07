<?php

// classes save a lot fo time and give a lot of code that you can reuse.
class Car
{
    private String $make;
    private String $model;
    private String $color;

    // make something happen when you:
    // create a new car object.
    // commit a new car object.
    // parse a new car object
    public function __construct($make,$model,$color)
    {
        $this->make = $make;
        $this->model = $model;
        $this->color = $color;
    }

    public function start(){
        echo 'Car Starting...';
    }
    public function setMake($make){
                    // ➘ $make is going to be what the user
                            // types in the parameter.
        $this->make = $make;
    }
    public function getMake(){
        return $this -> make;
    }
}

// this is a key word that used whenever your dealing with
// properties of the class