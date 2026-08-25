function fx1(a){
    return a * a;
}

let sol = function fx2(){
    for (let i = 0; i < 5; i++) {
        console.log(i+1);
    }
}

const sol1 = function fx2(){
    for (let i = 0; i < 5; i++) {
        console.log(i+1);
    }
}

// Arrow fxns

const getexp = (x,y) => {
    return x ** y;
}

const getexp1 = (x,y) => x ** y;

console.log(getexp(2,3));
console.log(getexp1(2,3));

console.log(fx1(5));
sol();
sol1();