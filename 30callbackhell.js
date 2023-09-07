function myFunction() {
    setTimeout(() => {
        const data = { a: 1, b: 2, c: 3 }
        console.log(data)
        setTimeout(function () {
            console.log("Hello World")
        }, 6000)
    }, 2000)
}

myFunction()
