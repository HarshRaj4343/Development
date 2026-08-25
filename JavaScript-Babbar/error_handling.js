// // Compile time error

// console.log(;

// // Runtime error
// console.log(a); // reference error as a is not defined

try{
    console.log(a);
}
catch(err){
    console.log("Error: " + err.message);
    // include:-
    // retry logic
    // custom error handling
    // logging
    // fallback mechanism
}

// finally - will run everytime whether there is an error or not

finally{
    console.log("Finally block executed");
}



// try{
//     console.log(a);
// }
// catch(err){
//     throw new Error("pehle variable ko declare toh kar lo bhai, fir print karna")
// }

// finally{
//     console.log("Finally block executed");
// }


// let errorcode = 100;
// if (errorcode === 100){
//     throw new Error('Invalid JSON');
// }