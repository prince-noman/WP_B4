<?php

namespace app\class1;

class Person{
    // properties
    // Access Modifier
    public $name;
    public $age;
    public $weight;


    public function __construct($name, $age, $weight){
        $this->name = $name;
        $this->age = $age;  
        $this->weight = $weight;
    }


    public function greet(){
        echo "Hello {$this->name}";
    }

}