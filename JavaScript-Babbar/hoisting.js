// Hoisting is the process of moving the declaration of variables, functions, or classes to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code.

sayMyName("harsh"); 

function sayMyName(finalName){
    console.log(finalName);
}

// this should not have worked but it works because of hoisting. The function declaration is hoisted to the top of the scope, so it can be called before it is defined in the code and all of this is done automatically by hoisting -> just assume that the entire saymyname fxn and its fxn calling code is enclosed under a bracket and then the entire saymyname fxn is moved to the top of the bracket. This is done by the compiler during the compilation phase. The compiler does not care about the order of the code, it just moves the function declaration to the top of the scope.


console.log(age);
var age = 25;

// this is now showing undefined as only the variable declaration is hoisted to the top of the scope, not the variable initialization. So, when we try to access the variable before it is initialized, it will return undefined. This is because the variable is declared but not initialized yet. The variable is initialized only when the code execution reaches that line. only var age;


// USING LET AND CONST

// console.log(age1);
// let age1 = 25;

// // this will throw a ReferenceError

// console.log(age2);
// const age2 = 25;

// // this will also throw a ReferenceError

sayhello();
let sayhello = function(){
    console.log("Hello");
}

// this will also throw a ReferenceError as the function expression is not hoisted. 

class Human{

}

const obj = new Human();

// this will also throw a ReferenceError as the class declaration is not hoisted.