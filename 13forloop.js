//Iterating over an Array:
const fruits = ["Apple", "Banana", "Watermelon", "Grapes"];

for (i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

//Iterating over Numbers:
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//Iterating in Reverse:
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

//Skipping Iteration:
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}

//looping through objects

const person = {
  name: "Alice",
  age: 30,
  occupation: "Engineer",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (instance) {
  console.log(`${instance}s`);
});

for (i of numbers) {
  console.log(i);
}
