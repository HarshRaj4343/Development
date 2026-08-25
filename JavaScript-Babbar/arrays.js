let arr = [1,2,"harsh",4,5];
console.log(arr);

// using array constructor

let brr = new Array('love',1,true);
console.log(brr);

// Built-in methods of array

brr.push("harsh"); // adds an element to the end of the array
console.log(brr);
brr.pop(); // removes the last element of the array
console.log(brr);
brr.shift(); // removes the first element of the array
console.log(brr);
brr.unshift("harsh"); // adds an element to the beginning of the array
console.log(brr);
// shallow copy using slice() method
let crr = brr.slice(1,2); // shallow copy of brr
console.log(crr);
brr.splice(1,1); // removes 1 element from index 1
console.log(brr);
brr.splice(1,0,"harsh"); // adds "harsh" at index 1
console.log(brr);


let drr = [10,20,30];

let ans = drr.map((number) => {
    return number*number;
})
drr.map((number) => console.log(number)); 


let err = [40,50,60];
err.map((number,index) => {
    console.log("the number is ",number);
    console.log("the index is ",index);
})

// to use f strings type structure in js, do:-

let name1 = "harsh";
let age = 20;
console.log(`my name is ${name1} and i am ${age} years old`);



// Filter method in js

let frr = [1,2,3,4,5,6,7,8,9,10];

let evenNumbers = frr.filter((number) => {
    return number % 2 === 0;
})

console.log(evenNumbers);

// Reduce method in js

let grr = [1,2,3,4,5];

let sum = grr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // 0 is the initial value of accumulator

// if the accumulator is initialized to the first element of the array by default, then the initial value is not required. In that case, the first element of the array will be used as the initial value of the accumulator and the iteration will start from the second element of the array. - meaning that the currentValue will be the second element of the array in the first iteration. The initial value is required when the array is empty, otherwise it will throw an error.

console.log(sum);


let hrr = [1,2,3,4,5];
hrr.sort();
console.log(hrr); // sorts the array in ascending order by default
hrr.reverse(); // got the descending order
console.log(hrr);

// note:-

let irr = [1,2,3,4,5];
irr.sort((a,b) => {
    return b-a; // sorts the array in descending order
})
console.log(irr);
irr.sort((a,b) => {
    return a-b; // sorts the array in ascending order
})
console.log(irr);

// what js internally does here is that it basically takes the 2 elements one by one and compares them. if the return value is negative, it means that a is less than b and it will be placed before b in the sorted array. if the return value is positive, it means that a is greater than b and it will be placed after b in the sorted array. if the return value is 0, it means that a is equal to b and their order will not be changed.


let jrr = [1,2,3,4,5];
console.log(jrr.indexOf(3)); // returns the index of the first occurrence of the element in the array

// find

let krr = [1,2,3,4,5];

let found = krr.find((number) => {
    return number > 3;
})
console.log(found); // returns the first element that satisfies the condition

// check if an element exists in the array or not

let lrr = [1,2,3,4,5];

let exists = lrr.includes(10); // returns true if the element exists in the array, false otherwise
console.log(exists);




// for in, for each, for of loops in js

let mrr = [1,2,3,4,5];

mrr.forEach((value,index) => {
    console.log("Number is ",value);
    console.log("Index is ",index);
})

// for-in => enumerable properties

let obj = {
    name : "harsh",
    age : 20,
    greet : function(){
        console.log("Hello, " + this.name);
    }
}

for (let key in obj){
    console.log(key); // prints the keys of the object
    console.log(obj[key]); // prints the values of the object
}

// for-of => iterable objects

let nrr = [1,2,3,4,5];

for (let value of nrr){
    console.log(value); // prints the values of the array
}

let fullname = "harsh raj";
for (let char of fullname){
    console.log(char); // prints the characters of the string
}


// passing an array to a function

function printArray(arr){
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    });
    return sum;
}

let arr1 = [1,2,3,4,5];
let result = printArray(arr1);
console.log(result); // prints the sum of the array elements