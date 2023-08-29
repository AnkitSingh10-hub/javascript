let person = { name: 'Alice', age: 28 };
let jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Alice","age":28}


jsonString = '{"name":"Bob","age":32}';
person = JSON.parse(jsonString);
console.log(person); // Output: { name: 'Bob', age: 32 }
