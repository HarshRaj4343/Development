let src = {
    age: 25,
    wt: 36,
    ht: 180,
}

src.color = "white";


console.log(src);
// they are dynamic in nature, we can add/delete new properties to the object at any time in the runtime.


// 3 ways to clone an object in js

// using spread operator

let dest = {...src};
console.log(dest);

// using Object.assign()

let dest2 = Object.assign({}, src, {color: "black"}); // we can also add new properties to the object while cloning it
console.log(dest2);

// using manual iteration

let dest3 = {};
for (let key in src){
    dest3[key] = src[key];
}
console.log(dest3);
