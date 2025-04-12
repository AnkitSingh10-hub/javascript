
// filter: The filter method creates a new array containing all elements that pass a provided test.
const numbers = [1, 2, 3, 4, 5];

// Example: Filter even numbers from the array using filter
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]



const animals = ["lion", "tiger", "elephant", "giraffe", "zebra"];

// Using filter to create a new array of animals with names longer than 5 characters
const longNamedAnimals = animals.filter((animal) => animal.length > 5);

console.log(longNamedAnimals); // Output: ["elephant", "giraffe"]
