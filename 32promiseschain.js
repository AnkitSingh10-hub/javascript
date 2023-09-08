const promise = new Promise((resolve, reject) => {
    resolve(100)
})


promise.then(data => {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')

}).then(data => console.log(data))


//Promises chaining must return something everytime for the chain to live longer

