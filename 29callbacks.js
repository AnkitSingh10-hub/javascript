function first() {
    console.log("I am first")
}

function second(callback) {
    setTimeout(() => {
        console.log("I am second")
        callback()
    }, 2000)
}



function third() {
    console.log("I am third")
}
first()
second(third)