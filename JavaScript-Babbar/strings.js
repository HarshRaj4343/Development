let str = "Hello, World!";
console.log(str);

let nameusingbackticks = `My name is 
${str}`;
console.log(nameusingbackticks);

let firstName = new String("John");
// the difference between string literal and string object is that string literal is a primitive data type, while string object is an object. String object has properties and methods, while string literal does not.

console.log(firstName);

let lastName = "Doe";
console.log(lastName.length);

let str1 = firstName.concat(" ", lastName);
console.log(str1);

let str2 = firstName+lastName;
console.log(str2);

let str3 = `${firstName} ${lastName}`;
console.log(str3);

console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
console.log(str1.substring(0, 4));
let words = str1.split(" ");
console.log(words);
console.log(str1.replace("John", "Jane"));
// while doing the replace method, the original string is not changed, a new string is returned with the replaced value. Strings are immutable in JavaScript.
console.log(str1.charAt(0));
console.log(str1.indexOf("Doe"));
console.log(str1.lastIndexOf("o"));
console.log(str1.startsWith("John"));
console.log(words.join(" "));
