let a = 10;
let b = 20;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** 2); // Exponentiation

// Unary Operators

// Pre
console.log(++a); // Increment
console.log(--b); // Decrement

// Post
console.log(a++); // Increment
console.log(b--); // Decrement

// Loose vs Strict Equality
let x = 5;
let y = '5';

console.log(x == y);
console.log(x === y);

// Ternary Operator

let age = 18;
let canVote = (age >= 18) ? 'Yes' : 'No';
console.log(canVote);

// Falsey and Truthy Values

// All falsey values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN, false
// All other values are truthy, including: true, {}, [], "0", "false", new Date(), -1, 3.14, Infinity, -Infinity

// Short Circuiting using OR operator

let name1 = '';
let defaultName = 'Guest';
let displayName = name1 || defaultName;
console.log(displayName); 

console.log(false || "Harsh");

// the difference between " " and '' is that " " is a string with a space character, while '' is an empty string with no characters. In JavaScript, both are considered truthy values, but they behave differently in certain contexts. For example, when checking for truthiness, an empty string ('') will evaluate to false, while a string with a space (" ") will evaluate to true.