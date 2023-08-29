console.log(a); // Throws ReferenceError
let a = 5;

console.log(b); // Throws ReferenceError
const b = 10;

console.log(c);

var c = 100; // Works as var has global hoisting
