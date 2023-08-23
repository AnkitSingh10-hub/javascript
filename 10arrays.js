//Creating Arrays:
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];
const mixedArray = [1, "hello", true, null];

//Accessing Array Elements:
console.log(numbers[0]); // Outputs: 1
console.log(fruits[1]); // Outputs: "banana"

//Modifying Array Elements:
numbers[2] = 10;
fruits[0] = "pear";

//Array Length:
console.log(numbers.length); // Outputs: 5

//Adding and Removing Elements:
numbers.push(6); // Adds an element to the end
fruits.pop(); // Removes the last element
fruits.unshift("grape"); // Adds an element to the beginning
fruits.shift(); // Removes the first element
console.log(numbers);
console.log(fruits);
num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Iterating Over Arrays:
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

fruit = ["Apple", "Litchy", "Banana"];

fruit.forEach(function (instance) {
  console.log(instance);
});
// array to string
console.log(fruit.toString());

//Sorting Arrays:
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
nums.reverse();
console.log(nums);
nums.sort();
console.log(nums); // Outputs: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
