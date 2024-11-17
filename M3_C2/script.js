// Function Declaration

// function greet(name) {
// Concatenation
//   return "My name is " + name;
//   return "My name is" + " " + name;
//   return `My name is ${name}`;
// }

// Function Call
// console.log(greet("Prince"));

// const string1 = "ABC";
// const string2 = "DFG";
// console.log("My strings are " + string1 + " and " + string2);
// console.log(`My strings are ${string1} and ${string2}`);

// Arrow Function

// const myFunc = (name) => {
//   return name;
// };

// const myFunc = (name) => name;
// console.log(myFunc("John"));

// const sum = (n1, n2) => n1 + n2;
// console.log(sum(10, 20));

// Array

// const fruits = ["apple", "banana", "orange", "mango"];

// adding element at the end
// fruits.push("dates");
// console.log(fruits);

// removing element from end
// const removed = fruits.pop();
// console.log(removed);
// console.log(fruits);

// adding element at the beginning
// fruits.unshift("dates");
// console.log(fruits);

// Removing element from beginning
// fruits.shift();
// console.log(fruits);

// Accessing array element
// console.log(fruits[2]);
// console.log(fruits[0]);

// Counting the length of array
// console.log(fruits.length);

// fruits.push("X");
// fruits.push("Y");
// fruits.push("Z");

// const lastIndex = fruits.length - 1;

// const lastElement = fruits[fruits.length - 1];
// const lastElement = fruits[lastIndex];
// console.log(lastElement);
// fruits[fruits.length - 1];
// fruits[4 - 1];
// fruits[3];

// Removing element from middle
// console.log(fruits);
// fruits.splice(1, 1);
// console.log(fruits);

// Adding element in middle
// console.log(fruits);
// fruits.splice(1, 0, "dates", "grapes");
// console.log(fruits);

// Slice
// console.log(fruits);
// const slicedArray = fruits.slice(1, 3);
// console.log(slicedArray);
// console.log(fruits);

// Object

// const person = {
//   name: "John",
//   firstName: "Mr",
//   lastName: "Smith",
//   firstNamelastName: "Mr Smith",
//   age: 30,

//   greet: function () {
//     return "My name is " + this.name;
//   },
// };

// Accessing Property using Dot Notation
// console.log(person.name);
// console.log(person.age);
// console.log(person.greet());

// Accessing Property using Bracket Notation
// console.log(person["name"]);
// console.log(person["firstName" + "lastName"]);
// console.log(person["firstNamelastName"]);

// Loops = for, while, do-while, for in, for of

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// for loop

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers[2]);
// console.log(numbers[3]);

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// while loop

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

// Do while loop

// let i = 1;

// do {
//   console.log(i);
//   i++;
// } while (i <= 1);

// for in -> object

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// for (let key in person) {
//   //   console.log(key);
//   console.log(person[key]);
// }

// for of -> array

// const fruits = ["apple", "banana", "orange", "mango", "dates"];

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// forEach

// fruits.forEach((fruit) => console.log(fruit));
// fruits.forEach(function (fruit) {
//   console.log(fruit);
// });
