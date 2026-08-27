// A Promise represents a value that we will get
// either in the future (resolve) or an error (reject).

function getData() {
    return new Promise((resolve, reject) => {
        let success = true;
        if (success) {
            resolve("Data received!");
        } else {
            reject("Something went wrong!");
        }
    });
}


// .then() → runs when Promise is RESOLVED
// .catch() → runs when Promise is REJECTED
// .finally() → runs NO MATTER WHAT

getData()
    .then((data) => {
        console.log(data);
        return "Processing data...";
    })
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Finished!");
    });