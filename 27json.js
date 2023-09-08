//converting to json string
let person = { name: 'Alice', age: 28 };
let jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Alice","age":28}

//converting to javascript object
jsonString = '{"name":"Bob","age":32}';
person = JSON.parse(jsonString);
console.log(person); // Output: { name: 'Bob', age: 32 }


//converting response data from fetch api to javascript object
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Parsed JSON data
    })
    .catch(error => {
        console.error('Error:', error);
    });
