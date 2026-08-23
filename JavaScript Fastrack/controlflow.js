console.log("Hello from external JavaScript!")

// Conditionals

let hour = 14;
if (hour < 12){
    console.log("Good morning!");
}
else if (hour < 18){
    console.log("Good afternoon!");
}
else{
    console.log("Good evening!");
}
let age = 20;
if (age >= 18){
    console.log("You are an adult.");
}
else{
    console.log("You are a minor.");
}
// Ternary operator
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);


// Switch statement
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Today is Monday.");
        break;
    case "Tuesday":
        console.log("Today is Tuesday.");
        break;
    case "Wednesday":
        console.log("Today is Wednesday.");
        break;
    case "Thursday":
        console.log("Today is Thursday.");
        break;
    case "Friday":
        console.log("Today is Friday.");
        break;
    case "Saturday":
        console.log("Today is Saturday.");
        break;
    case "Sunday":
        console.log("Today is Sunday.");
        break;
    default:
        console.log("Invalid day.");
}


// For Loops

for (let i = 1; i <= 5; i++){
    console.log(`Iteration ${i}`);
}

// While Loops

let n = 0;
while (n < 5){
    console.log(`Count: ${n}`);
    n++;
}

// Do-While Loops

let m = 0;
do {
    console.log(`Count: ${m}`);
    m++;
} while (m < 5);


for (const fruit of ["apple", "banana"]) {
console.log(fruit);
}

const person = { name: "Sam", age: 30 };
for (const key in person) {
console.log(key, person[key]);
}

// Functions
let a = 10;
let b = 5;

function add(x,y){
    return x+y;
}

const subtract = function(x,y){
    return x-y;
}

const multiply = (x,y) => {
    return x*y;
}

console.log(add(5,3));
console.log(subtract(5,3));
console.log(multiply(5,3));

// Default Parameters and Rest Parameters

function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
// this code defines a function called greet that takes a single parameter name. If no argument is provided when the function is called, name will default to "Guest". The function returns a greeting message that includes the provided name.

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
// this code defines a function called sum that takes a variable number of arguments using the rest parameter syntax (...numbers). The function uses the reduce method to calculate the sum of all the numbers passed to it and returns the total. rest parameters are basically used to represent an indefinite number of arguments as an array. In this case, all the numbers passed to the sum function are collected into the numbers array, which is then processed to calculate the total sum.

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22


// Scopes and Closures

function makeCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const counter = makeCounter();
counter(); // returns 1
counter();