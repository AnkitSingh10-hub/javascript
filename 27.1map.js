//map: The map method creates a new array by applying a function to each element of the original array.
const numbers = [1, 2, 3, 4, 5];

// Example: Double each number in the array using map
const doubledNumbers = numbers.map((value) => value * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]



const fruits = ["apple", "banana", "cherry", "date"];

// Using map to create a new array with the lengths of each fruit name
const fruitLengths = fruits.map(fruit => fruit.length);

console.log(fruitLengths); // Output: [5, 6, 6, 4]
