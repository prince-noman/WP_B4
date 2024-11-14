// variable, array, loop, condition, function

// Variable -> var, let, const

// Var - Global Scope
// var name = "John";
// console.log(name);

// Redecalre Possible
// var name = "Doe";
// console.log(name);

// Reassign Possible
// name = "Rakib";
// console.log(name);

// Let - Block Scope
// let name = "John";
// console.log(name);

// Reassign Possible
// name = "Doe";
// console.log(name);

// Redecalre Not Possible
// let name = "Rakib";
// console.log(name);

// Const - Block Scope
// const months = 12;
// console.log(months);

// Redecalre Not Possible
// const months = 14;
// console.log(months);

// Reassign Not Possible
// months = 16;
// console.log(months);

// Variable naming convetions
// Names can contain letters, digits, underscores, and dollar signs.
// Names must begin with a letter.
// Names can also begin with $ and _ (it is not JS convention).
// Names are case sensitive (y and Y are different variables).
// Reserved words (like JavaScript keywords) cannot be used as names.

// Case
// camelCase = daysInWeek - JS
// snake_case = days_in_week - Python, PHP
// kebab-case = days-in-week - Cobol, Perl
// PascalCase = DaysInWeek - C#

// Data Types
// Premitive Data Types
// String = "Hello", 'firstName'
// Number = 0-9
// Boolean = true/false
// Null
// Undefined

// Non-Premitive Data Types
// Array = new Array('John', 'Doe') / ['John', 'Doe']
// Object = {name: 'John', age: 30}

// Type Check
// let firstName = "John";
// console.log(typeof firstName);

// operators
// Arithmetic Operators (+, -, *, /, %)
// const n1 = 6;
// const n2 = 2;
// const result = n1 + n2;
// const result = n1 - n2;
// const result = n1 * n2;
// const result = n1 / n2;
// const result = n1 % n2;
// console.log(result);

// Logical Operators (&&, ||, !)

// || -> OR
// T | T = T
// T | F = T
// F | T = T
// F | F = F

// && -> AND
// T | T = T
// T | F = F
// F | T = F
// F | F = F

// ! -> NOT
// !T = F
// !F = T

// const isActive = true;
// const isPending = true;

// console.log(isActive || isPending);
// console.log(isActive && isPending);
// console.log(!isActive);

// Comparison Operators (>, <, >=, <=, ==, ===, !=, !==)

// const n1 = 5;
// const n2 = 6;

// console.log(n1 > n2);
// console.log(n1 < n2);
// console.log(n1 >= n2);
// console.log(n1 <= n2);
// console.log(n1 == n2); // Loose Equality (value only)
// console.log(n1 === n2); // Strict Equality (datatype + value)
// console.log(n1 != n2);
// console.log(n1 !== n2);

// Conditional Statements ( if else, switch)
// if (condition) {
//     // code to execute if condition is true
// } else if(condition) {
//     // code to execute if condition is false
// }else{
//     // code to execute if condition is false
// }

// const age = 21;

// if (age >= 18) {
//   console.log("You can vote");
//   if (age >= 21) {
//     console.log("You are above 18");
//   }
// } else {
//   console.log("You cannot vote");
// }

// const marks = 40;

// if (marks >= 80) {
//   console.log("Exellent");
// } else if (marks >= 60) {
//   console.log("Good");
// } else {
//   console.log("Average");
// }

// Ternary Operator ?  :
// const age = 2;

// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log("You cannot vote");
// }

// age >= 18 ? console.log("You can vote") : console.log("You cannot vote...");

// Null Coleasing Operator (??)

// const name = null;
// const userName = name ?? "Guest";
// console.log(userName);

// Switch Statement

// const day = 5;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Weekend");
//     break;
// }

// Functions

// const n1 = 5;
// const n2 = 4;

// const res1 = n1 + n2;

// console.log(res1);

// const n3 = 10;
// const n4 = 15;

// const res2 = n3 + n4;

// console.log(res2);

// function declaration
// function sum(n1, n2) {
//   const result = n1 + n2; // function body
//   return result;
// }

// // function call
// const r1 = sum(5, 8);
// console.log(r1);

// console.log(sum(10, 20));

// var i;
// for (i = 0; i < 10; i++) {
//   if (i == 5 || i == 8) {
//     continue;
//   }
//   document.write(i + "<br>");
// }
