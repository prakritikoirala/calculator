// Assignment 2: Age Check

// Ask the user to enter their age.

// Store it in a variable.

// Use boolean logic to check:

// If age ≥ 18 → "You are an adult"

// Else → "You are a minor"
// let age =parseInt(prompt("enter the age"));

// if(age>=18){
//     let isadult = true;
//     console.log(isadult);}
//     else{
//         let isadult = false;
//         console.log(isadult, "you are minor");
//     }
// Assignment 3: Confirmation

// Ask the user if they want to subscribe to a newsletter using confirm().

// Store the result in a boolean variable.

// Print:

// "Thank you for subscribing!" if true

// "You opted out." if false

// let newletter= confirm("Do you want to suscribe my channel");
// if(newletter) {
//     console.log("thank you for suscribe my channel",newletter);

// }


// else{
    
//     console.log("you opted out", newletter);
// }
// Assignment 4: Simple Calculator

// Ask the user to enter two numbers using prompt().

// Store them in variables.

// Calculate sum, difference, product, and division.

// Print the results.

// let a = parseInt(promt("enter the first number"));
// let b= parseInt(prompt("enter the second number"));
// let sum = a+b;
// console.log("the sum is :",sum);
// let substract = a-b;
// console.log("the difference number is",substract);
// let product = a*b;
// console.log("the product number is:",product);
// let division =a/b;
// console.log("the division number is ", division);

// ake two numbers and swap their values (without using temp).

// Get user input for temperature and show message based on it.

// Create 3 variables of different types (string, number, boolean) and print their types.

// Write a script to calculate the area of a rectangle (length * breadth).

// Store 5 items in separate variables and print them in one line.

// let a b = arr;
// let [a,b]=[b,a];
// // console.log(a,b);


// Create two number variables and calculate their sum, difference, product, and division.

// Create two string variables and concatenate them.

// Use prompt to take two numbers from the user and print their sum.

 // create two string variable and concatenate them
//  let a="prakriti"
//  let b = "mumy";
//  console.log(a+b);
// Store 5 items in separate variables and print them in one line.
//  let item1 = "apple";
//  let item2 = "mangow";
//  let item3= "banana";
//  let item4 ="greeen";
//  let item5 = "five";
//  console.log(item1+","+item2+","+item3+","+item4+","+item5+",");
// 1. Simple Function
// // 1. Simple Function
function hello() {
  console.log("Hello World!");
}
hello();

// 2. Function with Parameter
function greet(name) {
  console.log("Hello " + name);
}
greet("Prakriti");

// 3. Return Value Function
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

// 4. Function Expression
const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4));

// 5. Arrow Function
const fun = () => {
  console.log("I am arrow function");
};
fun();

// 6. Arrow Function Short Return
const square = num => num * num;
console.log(square(6));

// 7. Default Parameter
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}
welcome();
welcome("Prakriti");

// 8. Rest Parameter
function sum(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  console.log(total);
}
sum(2, 4, 6, 8);

// 9. Callback Function
function sayHi(name) {
  console.log("Hi " + name);
}

function process(callback) {
  callback("Prakriti");
}
process(sayHi);

// 10. Function Returning Function
function outer() {
  return function inner() {
    console.log("I am inner function");
  };
}
const fn = outer();
fn();

// 11. IIFE
(function() {
  console.log("Runs immediately!");
})();

// 12. Recursive Countdown
function countdown(n) {
  if (n === 0) return;
  console.log(n);
  countdown(n - 1);
}
countdown(5);

// 13. Factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// 14. Reverse String
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log(reverse("hello"));

// 15. Palindrome Check
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));

// 16. Check Even/Odd
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(10));

// 17. Find Max Number
function max(a, b, c) {
  return Math.max(a, b, c);
}
console.log(max(10, 50, 30));

// 18. Sum Array
function sumArray(arr) {
  let total = 0;
  for (let x of arr) {
    total += x;
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4]));

// 19. Largest in Array
function largest(arr) {
  return Math.max(...arr);
}
console.log(largest([3, 7, 2, 9]));

// 20. Filter Even Numbers
function filterEven(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEven([1, 2, 3, 4, 5, 6]));

// 21. Function Inside Object
let student = {
  name: "Prakriti",
  greet() {
    console.log("Hello " + this.name);
  }
};
student.greet();

// 22. Print Table
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}
printTable(5);

// 23. Check Prime Number
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7));

// 24. Random Number
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(random(1, 10));

// 25. Try-Catch in Function
function divide(a, b) {
  try {
    if (b === 0) throw "Cannot divide by zero";
    return a / b;
  } catch (error) {
    console.log(error);
  }
}
console.log(divide(10, 2));
console.log(divide(10, 0));
