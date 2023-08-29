// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set({ id: 1 }, "Some data");

// Getting values from the Map
console.log(myMap.get("name")); // Output: John
console.log(myMap.get("age")); // Output: 30

// Checking if a key exists in the Map
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("city")); // Output: false

// Deleting a key-value pair from the Map
myMap.delete("age");
console.log(myMap); // Output: Map { 'name' => 'John', { id: 1 } => 'Some data' }

// Getting the size of the Map
console.log(myMap.size); // Output: 2

// Iterating over a Map
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: John
// { id: 1 }: Some data

// Clearing all key-value pairs from the Map
myMap.clear();
console.log(myMap); // Output: Map {}
