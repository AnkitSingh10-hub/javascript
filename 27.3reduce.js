// reduce: The reduce method allows you to accumulate values from an array into a single result by applying a function to each element successively.

const numbers = [1, 2, 3, 4, 5];

// Example: Calculate the sum of all numbers in the array using reduce
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum); // Output: 15
