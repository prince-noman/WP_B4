<?php
declare(strict_types=1);

namespace App\Student;


// array (indexed, associative, multi-dimensional)

// $numbers = [1, 2, 3, 4, 5];
// echo $numbers[3];
// $numbers[3] = 50;
// print_r($numbers);

// $person = ["John", 20, "A+"];
// print_r($person);

// $person = [
//     "name" => "John",
//     "age" => 20,
//     "blood_group" => "A+"
// ];
// print_r($person);
// echo $person["name"];
// echo $person["blood_group"];

// foreach($person as $value){
//     echo $value . PHP_EOL;
// }

// foreach($person as $key => $value){
//     echo $key . " : " . $value . PHP_EOL;
// }

// $marks = [
//     [30, 60, 70],
//     [40, 50, 60],
//     [90, 70]
// ];

// print_r($marks);
// echo $marks[1][1];
// echo $marks[2][0];


// $marks = [
//    "math" => [30, 60, 70],
//     "bangla" => [40, 50, 60],
//     "english" => [90, 70]
// ];

// echo $marks["english"][1];

// foreach($marks as $key => $value){
//     echo $key . PHP_EOL;
//     foreach($value as $mark){
//         echo $mark . ", ";
//     }
//     echo PHP_EOL;
// }


// Remove Element from last

// $numbers = [1, 2, 3, 4, 5];
// array_pop($numbers);
// print_r($numbers);

// add Element to last
// print_r($numbers);
// array_push($numbers, 6); 
// print_r($numbers);

// Remove Element from first
// array_shift($numbers);
// print_r($numbers);

// add element to first
// array_unshift($numbers, 0);
// print_r($numbers);

// add element to middle position
// $fruits = ["apple", "banana", "orange"];
// array_splice($fruits,1,0, "mango");
// print_r($fruits);


// delete element from any position
// array_splice($fruits, 1, 2);
// print_r($fruits);

// print_r(array_reverse($fruits));

// if(in_array("apple", $fruits)){
//     echo "Apple is there";
// }else{
//     echo "Apple is not there";
// }


// function
// declaration/definition
// function sum($n1, $n2){
//     return $n1 + $n2;
// }

// function call
// echo sum(10, 20);

// variadic function
// function add(...$numbers){
//     $result = 0;
//     // print_r($numbers);
//     foreach($numbers as $number){
//         $result = $result + $number;
//     }
//     return $result;
// }

// echo add(10, 20, 30);

// arrow function
// $add = fn($n1, $n2) => $n1 + $n2;
// echo $add(100, 20);


// Named Arguments

// function greet($name, $age = 0){
//     echo "Hello {$name}, you are {$age} years old";
// }

// greet("John", 20); 
// greet(age: 20, name:"John"); 

// Default value
// greet("John");
// greet("John", 80);

// Type Hinting

// function add(int $n1, int | string $n2) : int  {
//     return $n1 + $n2;
// }

// echo add(10, 2);

// Object Oriented Programming (OOP)

// class Person{
//     // Properties
//     public $name = "John";
//     public $age = 30;
//     public $weight = 50;

//     // Methods
//     public function greet(){
//         echo "Hello {$this->name}";
//     }
// }

// Object Instantiation / Initialization
// $p1 = new Person;
// echo $p1->name . PHP_EOL;
// echo $p1->age. PHP_EOL;

// $p2 = new Person;
// echo $p2->name;


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

// $p1 = new Person("Mike", 20, 50);
// // echo $p1->name;
// // echo $p1->weight;
// // $p1->greet();


// $p2 = new Person("Nick", 40, 150);
// echo $p2->name;
// // echo $p2->weight;
// $p2->greet();


class Student extends Person{

    public $student_id;

    public function __construct($name, $age, $weight, $student_id){
        parent::__construct($name, $age, $weight);
        $this->student_id = $student_id;
    }

    public function greet(){
        echo "Hello {$this->name} {$this->student_id}";
    }
}

// $s1 = new Student("Rubel", 20, 50, 1000001);
// $s1->greet();
// echo $s1->student_id;
// echo $s1->name;




