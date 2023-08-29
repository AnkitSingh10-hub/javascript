class Animal {
    constructor(name) {
        this.name = name;
    }

    method1() {
        console.log("This is the parent method")
    }

}


class Dog extends Animal {
    constructor(name, sound) {
        super(name)
        this.sound = sound
    }

    method1() {
        console.log("This is the child method")
    }
}


let object = new Dog("Ram", "Bark")

console.log(object.name)
console.log(object.sound)
object.method1()