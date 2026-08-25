// Global scoped
// Function scoped
// Block scoped

var age = 15; // globally scoped - accessible anywhere in the code

function sayHello(){
    var name1 = "Earth";
    console.log("Hello, " + name1); // function scoped - accessible only within the function
}
sayHello();
// console.log(name1) // throws an error as name1 is not defined outside the function

{
    var height = 180;
    let weight = 75;
    const age1 = 25;
}

console.log(height); // accessible outside the block as var is function scoped
console.log(weight); // throws an error as weight is block scoped
console.log(age1); // throws an error as age1 is block scoped

// var is global scoped / fxn scoped and can be accessed outside the block but let and const are block scoped and cannot be accessed outside the block.


