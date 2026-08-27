// Closures are a fundamental concept in JavaScript that allows functions to access variables from their outer scope even after the outer function has finished executing.
// required data = lexical scope = surrounding state
// closure is a combination of the function and the lexical scope.

// // nested functions
// let name = "Babbar"; // global variable
// function init(){
//     let name = "Mozilla"; // name is a local variable created by init - its memory will be freed once init() is executed since let is block scoped
//     function displayName(){
//         let name = "Harsh"; // name is a local variable created by displayName
//         // displayName() is the inner function,that forms a closure
//         console.log(name); // use variable declared in the parent function
//     }
//     displayName();  
// }
// init(); // This will log "Mozilla" to the console

// // let is block scoped
// // var is function scoped
// // const is block scoped and cannot be reassigned


// The actual case


// nested functions
function init(){
    let name = "Mozilla"
    function displayName(){
        console.log(name);
    }
    return displayName;
}
let displayName = init();

displayName(); // it should not have logged mozilla because init() has already finished executing and its local variable name should have been freed from memory. But since displayName() is a closure, it has access to the variables in its outer scope, even after the outer function has finished executing. So it logs "Mozilla" to the console. basically, name is binded to the displayName function and is not freed from memory.