<?php

// Printing
// echo "Hello World <br>";
// print ("Hello World");
// echo "<h1>Hello World</h1>";

// Variables

 //Conventions
// Rules for PHP variables:
//     A variable starts with the $ sign, followed by the name of the variable
//     A variable name must start with a letter or the underscore character
//     A variable name cannot start with a number
//     A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
//     Variable names are case-sensitive ($age and $AGE are two different variables)


// $name = "John";
// $full_name = 'John Doe';

// $first_name = "John";
// $last_name = "Doe";

// Concatenation
// echo "My name is " . $first_name . " " . $last_name;
// echo "My name is {$first_name} {$last_name}.";
// echo 'My name is {$first_name} {$last_name}.'; // will not work

// Data Types (integer, float, string, boolean, array, object, null)

// $number = 1;
// $float_number = 4.5;
// $string = "Hello World";
// $boolean = true; // true/false
// $numbers1 = array(1, 2, 3, 4, 5); // array
// $numbers2 = [1, 2, 3, 4, 5]; // array
// echo $numbers1; // will not work
// print_r($numbers1);
// var_dump($numbers1);
// $object = new stdClass();
// $null = null;

// Data Type Check

// echo gettype($number);
// echo gettype($string);

// Commenting

//Single Line Comment

/*
this is a
Multiline Comment

*/

// Loops (for, while, do while, foreach)

// For
// for($i=1; $i<=5; $i++){
//     echo $i . "\n";
// }

// While Loop
// $i = 1;

// while($i <=10){
//     echo $i . "\n";
//     $i++;
// }

// $i = 10;
// while($i >=1){
//     echo $i . "\n";
//     $i--;
// }

// Do While Loop

// $i =1;

// do{
//     echo $i . "\n";
//     $i++;
// }while($i <=5);

// Foreach Loop

// $numbers = [1, 2, 3, 4, 5];

// echo $numbers[4];
// 0,1,2,3,4
// for($i = 0; $i < count($numbers); $i++){
//     echo $numbers[$i] . "\n";
// }

// foreach($numbers as $num){
//     echo $num . "\n";
// }

// foreach($numbers as $key => $value){
//     echo $key . " => " . $value . "\n";
// }

// Conditionals

// $age = 19;

// if($age >= 18){
//     echo "You can vote";
// }else{
//     echo "You cannot vote";
// }

// $marks = 95;

// if($marks >= 80){
//     echo "Execellent \n";
//     if($marks>=90){
//         echo "Over Execellent";
//     }
// }else if($marks >= 60){
//     echo "Good";
// }else{
//     echo "Fail";
// }

// Switch

// $day = "Sunday";

// switch($day){
//     case "Monday":
//         echo "Today is Monday";
//         break;
//     case "Tuesday":
//         echo "Today is Tuesday";
//         break;
//     case "Wednesday":
//         echo "Today is Wednesday";
//         break;
//     case "Thursday":
//         echo "Today is Thursday";
//         break;
//     case "Friday":
//         echo "Today is Friday";
//         break;
//     case "Saturday":
//     case "Sunday":
//         echo "Weekend";
//         break;
//     default:
//         echo "Invalid Day";
// }

// Match

// $sub = "EEE";

// $department = match($sub){
//     "Math" => "Mathematics Department",
//     "CSE" => "CSE Department",
//     "EEE" => "EEE Department"
// };
// echo $department;

// $isActive = false;
// $isAdmin = true;

// if($isActive && $isAdmin){
//     echo "Active and Admin";
// }else{
//     echo "Not Active or Not Admin";
// }

// if($isActive || $isAdmin){
//     echo "Active and Admin";
// }else{
//     echo "Not Active or Not Admin";
// }

// if(!$isAdmin){
//     echo "Not Admin";
// }else{
//     echo "Admin";
// }

// String Operation
$name = "John";
$count = strlen($name);
// echo $count;

// String Slicing
// $str = "Hello";
// echo substr($str,0,3);
// echo substr($str,-5,4);

// String Replace
// $str = "Hello World";
// echo str_replace("Hello", "Hi", $str);

// Casing
// $str = "heLLo wOrlD";
// echo strtolower($str);
// echo strtoupper($str);
// echo ucfirst($str);
// echo ucwords(strtolower($str));

// Triming
// $str = "    Hello World   ";
// echo strlen($str);
// echo ltrim($str);
// echo rtrim($str);
// echo trim($str);

// $str = "<script>alert('Hello World');</script>";
// $plain_text = htmlspecialchars($str);
// echo $plain_text;

//
// $str = "Apple-Banana Orange";
// $fruits_array = explode("-", $str);
// print_r($fruits_array);
// $second_array = explode(" ", $fruits_array[1]);
// print_r($second_array);

// $main_array = [];
// $main_array[0] =  $fruits_array[0];
// print_r($main_array); 

// foreach($second_array as $fruit){
//     array_push($main_array, $fruit);
// }

// print_r($main_array);

// $names_array = ["John", "Jane", "Mary"];
// $names_string = implode("-", $names_array);
// echo $names_string;








