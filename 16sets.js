// Creating a new Set
const mySet = new Set();

// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add("ANKIT"); // This won't create a duplicate entry
mySet.add(2); // This won't create a duplicate entry

console.log(mySet); // Output: Set { 1, 2, 3 }

// Checking if a value exists in the Set
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

// Removing a value from the Set
mySet.delete(3);
console.log(mySet); // Output: Set { 1, 2 }

// Iterating over a Set
for (const item of mySet) {
  console.log(item);
}
// Output:
// 1
// 2

// Getting the size of the Set
console.log(mySet.size); // Output: 2

// Clearing all values from the Set
mySet.clear();
console.log(mySet); // Output: Set {}
