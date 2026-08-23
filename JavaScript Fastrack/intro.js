console.log("Hello from external JavaScript!"); // prints to the console of the browser

let age = 25;
let name = "Harsh Raj"; // can be changed later
const pi = 3.14159; // unchangeable value but mutation of objects is allowed
var oldStyle = "avoid"; // old way of declaring variables, avoid using it

console.log(typeof age); // returns "number"
console.log(typeof name); // returns "string"
console.log(typeof undefined);


// difference between block scope and function scope is that block scope is limited to the block it is defined in, while function scope is limited to the function it is defined in.

const button = document.getElementById("changeButton");
const message = document.getElementById("message");

const firstName = "Harsh";
const lastName = "Raj";
const greeting = `Hello, ${firstName} ${lastName}! Welcome to JavaScript Fastrack.`;
console.log(greeting);
const multiLineString = `This is a multi-line string.
It can span multiple lines without using escape characters.`;
console.log(multiLineString);

// Operators
let a = 10;
let b = 5;
console.log(a + b); // addition
console.log(a - b); // subtraction
console.log(a * b); // multiplication
console.log(a / b); // division
console.log(a % b); // modulus

// Comparison Operators
console.log(a > b); // greater than
console.log(a < b); // less than
console.log(a >= b); // greater than or equal to
console.log(a <= b); // less than or equal to
console.log(a == b); // equal to
console.log(a != b); // not equal to
console.log(a === b); // strict equal to
console.log(a !== b); // strict not equal to
console.log(a==b); // loose equal to
console.log("" == 0); // loose equal to
console.log(null == undefined); // loose equal to

 // if inputName is falsy, use "Guest" - this line of code is used to provide a default value for the username variable. If inputName is falsy (e.g., null, undefined, empty string, 0, false), then username will be assigned the value "Guest". Otherwise, it will take the value of inputName.

// to take the input from the user, we can use the prompt() function. It will display a dialog box that prompts the user for input and returns the input as a string.
// const inputName = prompt("Please enter your name:");
const username = inputName || "Guest"; // if inputName is falsy, use "Guest"
console.log(`Hello, ${username}!`);
const count = 0 ?? 10; 

button.addEventListener("click", function () {
    message.textContent = "JavaScript changed this text!";
    message.style.color = "blue";
    message.style.fontSize = "24px";

    button.textContent = "Clicked!";
});


