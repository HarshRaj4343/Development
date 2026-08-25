// Math Object in js

console.log(Math.PI)

console.log(Math.max(1,2,3,4,5,6,7,8,9,10))

console.log(Math.min(1,2,3,4,5,6,7,8,9,10))

console.log(Math.E)

console.log(Math.round(1.5))

console.log(Math.floor(1.5))

console.log(Math.ceil(1.5))

console.log(Math.random())

console.log(Math.abs(-5))

// Date Object in js

let curr = new Date();

let date = new Date('June 20 1998 07:15:00');

let newDate = new Date(1998, 5, 20, 7, 15, 0); // month is 0 based index, so 5 means June

console.log((newDate.getFullYear())); // returns the year (4 digits)
// sunday is 0
console.log(curr , "  ", date, "  ", newDate);