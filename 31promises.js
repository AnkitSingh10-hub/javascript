var number = 3


const promise = new Promise((resolve, reject) => {

    if (number === 2) {
        resolve("The number is equal to two")
    }
    else {
        reject("The number is not equal to two")
    }

})

promise.then(data => console.log(`The .then is run - ${data}`)).catch(data => console.log(`The .catch is run - ${data}`))

