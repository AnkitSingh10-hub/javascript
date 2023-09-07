export default class MyClass {
    constructor(property1, property2) {
        this.property1 = property1;
        this.property2 = property2;
    }

    // Methods
    method1() {
        // Method code
        console.log(`This is the method called ${this.property1}`)
    }

    method2() {
        // Method code
    }
}

// Creating an instance of the class
const instance = new MyClass('Ankit', 300);

// Accessing properties and methods
console.log(instance.property1);
instance.method1();


export function myFunction() {
    console.log("Function exported")
}
