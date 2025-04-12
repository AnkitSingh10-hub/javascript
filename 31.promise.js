var x = 100
let promise = new Promise(function (resolve, reject) {
    if (x === 3) {
        resolve("Success!");
    } else {
        reject("Error!");
    }
});


promise.then(result => console.log(result)).catch(error => console.log(error))