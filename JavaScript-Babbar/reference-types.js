// two types of memory in JS
// Stack and Heap Memory

// all arrays, objects, and functions are stored in heap memory while primitive data types are stored in stack memory.
// Primitive data types include string, number, boolean, null, undefined, and symbol.

// basically the contents of an array is stored in the heap memory while its pointer is stored in the stack memory. The pointer is a reference to the location of the array in the heap memory. When we assign an array to another variable, we are copying the pointer, not the contents of the array. Therefore, if we change the contents of the array using one variable, it will also change when accessed using the other variable.

// object is basically a collection of key-value pairs. The keys are strings and the values can be any data type, including other objects. Objects are stored in heap memory and their pointers are stored in stack memory. When we assign an object to another variable, we are copying the pointer, not the contents of the object. Therefore, if we change the contents of the object using one variable, it will also change when accessed using the other variable.

let obj = {
    "name" : "harsh",
    "name1" : "arsh", // both are permissible.
    age : 20,
    "age1" : 21,
    "age2" : 22,
    greet : function(){
        console.log("Hello, " + this.name); // "this" refers to the object itself. It is used to access the properties of the object.
    }
}

console.log(obj.age2);
obj.greet();
console.log(typeof(obj));


let obj2 = obj;
// while doing this, we are copying the pointer of obj to obj2. Therefore, if we change the contents of obj using obj2, it will also change when accessed using obj. Note that, there is no new memory allocation for obj2, it is just a reference to the same object in heap memory.

obj2.name = "harsh1";
console.log(obj.name); // harsh1
console.log(obj2.name); // harsh1

// shallow copy and deep copy of objects in JS

// shallow copy of an object is a copy of the object that shares the same reference to the original object. Therefore, if we change the contents of the shallow copy, it will also change when accessed using the original object. Shallow copy can be done using Object.assign() or spread operator.

let obj3 = Object.assign({}, obj); // shallow copy
// Object.assign(target, source) - here, it creates an empty object {}, then copies everything from obj into it.
obj3.name = "harsh2";
console.log(obj.name); // harsh1
console.log(obj3.name); // harsh2

// while doing let obj2 = obj; this is a reference copy, not a deep copy.

// deep copy of an object is a copy of the object that does not share the same reference to the original object. Therefore, if we change the contents of the deep copy, it will not change when accessed using the original object. Deep copy can be done using JSON.parse() and JSON.stringify().

let obj4 = JSON.parse(JSON.stringify(obj)); // deep copy
obj4.name = "harsh3";
console.log(obj.name); // harsh1
console.log(obj4.name); // harsh3