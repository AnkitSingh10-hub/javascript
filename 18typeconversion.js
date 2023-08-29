//String Conversion:
var number = 42;
var strNumber = String(number);

console.log(strNumber);

var boolean = true;
var strBoolean = boolean.toString();

console.log(strBoolean);

//Number Conversion
var strNumber = "42";
var num = Number(strNumber);

console.log(strBoolean);

var floatStr = "3.14";
var floatNum = parseFloat(floatStr);

console.log(floatNum);

//Integer Conversion:
var floatStr = "3.14";
var integer = parseInt(floatStr);

console.log(integer);

//Boolean Conversion:
var num = 42;
var boolNum = Boolean(num); // true

console.log(boolNum);

var emptyStr = "";
var boolEmptyStr = Boolean(emptyStr); // false

console.log(boolEmptyStr);

//Array Conversion:
var str = "hello";
var charArray = str.split(""); // ['h', 'e', 'l', 'l', 'o']

console.log(charArray);

//Object Conversion:
var obj = { name: "Alice", age: 30 };
var strObj = JSON.stringify(obj);
console.log(strObj);
var parsedObj = JSON.parse(strObj);
console.log(parsedObj);

const sentence = "This is a sample sentence.";

// Splitting by space
const words = sentence.split(" ");
console.log(words); // Output: [ 'This', 'is', 'a', 'sample', 'sentence.' ]

// Splitting by comma
const csv = "apple,banana,orange";
const fruits = csv.split(",");
console.log(fruits); // Output: [ 'apple', 'banana', 'orange' ]
