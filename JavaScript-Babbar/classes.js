class Human{
    // properties

    // default: public -> can be accessed from anywhere
    // private -> can be accessed only within the class
    age = 13;
    #wt = 36; // marked private using #, can be accessed only within the class
    ht = 180;
    bmi;
    // behaviours
    walking(){
        console.log("Human is walking", this.#wt);
    }
    
    constructor (newbmi){
        this.bmi = newbmi;
    }



    running(){
        console.log("Human is running");
    }

    // semantic clarity
    get fetchWt(){
        return this.#wt;
    }
    set changeWt(newWt){
        this.#wt = newWt;
    }
}

let obj = new Human(25);
console.log(obj.age);
console.log(obj.bmi);
console.log(obj.fetchWt); // use the getter to access the private property
obj.changeWt = 40; // use the setter to modify the private property
console.log(obj.fetchWt); // use the getter to access the modified private property
obj.walking();


// default parameter values in js

function greet(name = "Guest"){
    console.log("Hello, " + name);
}

greet();
greet("Harsh");

function sayName(fName = "Uday", lName = fName.toUpperCase()){
    console.log("Hello, " + fName + " " + lName);
}

sayName();
sayName("Harsh", "Raj");


function solve(value = {age: 20, name: "Harsh"}){
    console.log("hello", value);
}
solve();


function solve(value = {age: 20, name: "Harsh"}){
    console.log("hello", value);
}
solve(null); // this will use the default value as null is a valid value for the parameter

solve(undefined); // this will use the default value as undefined is not a valid value for the parameter


function getAge(){
    return 190;
}

function utility(name, age = getAge()){
    console.log(name, " ", age);
}

utility("Harsh", 78); // this will pass the return value of getAge() to utility() function