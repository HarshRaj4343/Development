// // Converting an asynchronous code into synchronous code using async/await


// async function getData() {
//     setTimeout(function() {
//         console.log("I am inside a setTimeout function");
//     }, 3000);
// }

// // an async function always returns a Promise. So, we can use .then() to get the value returned by the async function.

// let output = getData();

// // fetch API


// async function getDa(){
//     // GET request - async
//     let response = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1"); 
//     let data = await response.json(); // this is also an async operation, so we need to use await here as well
//     console.log(data);
// }

// getDa();

// // prepare the url -> synchronous code
// // fetch the data -> network call -> asynchronous code
// // process data -> synchronous code

// // mark await before the asynchronous code to make it synchronous so that only when the data is fetched, the next line of code will be executed. The await keyword can only be used inside an async function.



// // Making other types of requests using fetch API

async function createPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "My First Post",
            body: "Hello from JavaScript!",
            userId: 1
        })
    })
    let data = await response.json();
    console.log("Server response:", data);
}

createPost();