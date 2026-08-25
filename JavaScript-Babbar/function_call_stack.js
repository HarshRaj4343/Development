// stack is a data structure that follows the Last In First Out (LIFO) principle. It means that the last element added to the stack will be the first one to be removed. In JavaScript, the function call stack is used to keep track of function calls and their execution context.


// functions are a first-class citizens in JavaScript, meaning that they can be treated like any other value. They can be assigned to variables, passed as arguments to other functions, and returned from functions. When a function is called, a new execution context is created and pushed onto the call stack. When the function returns, its execution context is popped off the stack.


function solve(number){
    return function(number){
        return number*number;
    }
}

let square = solve(5);
console.log(square(5));


const arr = [
    function(a,b){
        return a+b;
    },
    function(a,b){
        return a-b;
    },
    function(a,b){
        return a*b;
    },
    function(a,b){
        return a/b;
    }
]

let first = arr[0](5, 10);
console.log(first);

let second = arr[1](5, 10);
console.log(second);

let third = arr[2](5, 10);
console.log(third);

let fourth = arr[3](5, 10);
console.log(fourth);

let obj = {
    age:25,
    wt:36,
    ht:180,
    greet2: () => {
        console.log("Hello");
    }
}

console.log(obj.age);
obj.greet2();


console.log(freet);
var freet = function(){
    console.log("Namaste");
}





function greetMe(greet, name){
    console.log("hellow", name);
    greet();
}


function greet(){
    console.log("Hello");
}

// greet(); 

greetMe(greet, "Harsh");
