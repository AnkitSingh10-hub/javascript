function myFunction() {
    setTimeout(() => {

        setTimeout(function () {
            console.log("Hello World")
        }, 6000)
        const data = { a: 1, b: 2, c: 3 }
        console.log(data)
    }, 2000)
}

myFunction()
