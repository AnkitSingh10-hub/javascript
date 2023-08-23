// Objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false,
};

// Object properties

console.log(person.firstName); // Output: John
console.log(person["age"]); // Output: 30

// Functions Inside Objects (Methods):
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
};

console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6

const calculator_2 = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

console.log(calculator_2.add(200, 300));
console.log(calculator_2.subtract(200, 300));

// this keyword
const person_2 = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person_2.getFullName()); // Output: John Doe
