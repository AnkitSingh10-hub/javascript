// Arithmetic Operator
let x = 10;
let y = 3;

console.log(x + y); // 13
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.333...
console.log(x % y); // 1
console.log(x ** y); // 1000

// Assignment Operator

let a = 5;
a += 3; // Equivalent to: a = a + 3;
a -= 2; // Equivalent to: a = a - 2;
a *= 4; // Equivalent to: a = a * 4;
a /= 2; // Equivalent to: a = a / 2;
a %= 3; // Equivalent to: a = a % 3;
a **= 2; // Equivalent to: a = a ** 2;

// Comparison Operator

let p = 5;
let q = "5";

console.log(p == q); // true (loose equality)
console.log(p === q); // false (strict equality)
console.log(p != q); // false (loose inequality)
console.log(p !== q); // true (strict inequality)
console.log(p > 3); // true
console.log(p < 10); // true
console.log(p >= 5); // true
console.log(p <= 5); // true

// Logical Operator

let isTrue = true;
let isFalse = false;

console.log(isTrue && isFalse); // false (logical AND)
console.log(isTrue || isFalse); // true (logical OR)
console.log(!isTrue); // false (logical NOT)

// Bitwise Operators

let num1 = 5; // Binary: 0101
let num2 = 3; // Binary: 0011

console.log(num1 & num2); // 1 (bitwise AND)
console.log(num1 | num2); // 7 (bitwise OR)
console.log(num1 ^ num2); // 6 (bitwise XOR)
console.log(~num1); // -6 (bitwise NOT)
console.log(num1 << 1); // 10 (left shift)
console.log(num1 >> 1); // 2 (right shift)
console.log(num1 >>> 1); // 2 (unsigned right shift)

// Unary Operators:

let n = 7;

console.log(+n); // 7 (unary plus)
console.log(-n); // -7 (unary minus)
console.log(n++); // 7 (post-increment)
console.log(n--); // 8 (post-decrement)
console.log(++n); // 8 (pre-increment)
console.log(--n); // 7 (pre-decrement)

// Conditional (Ternary) Operator:
let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Type Operators:

let value = "Hello";
console.log(typeof value); // "string"

let array = [1, 2, 3];
console.log(array instanceof Array); // true

// Other Operators:
let obj = { prop: "value" };
console.log(obj.prop); // "value"
console.log(obj["prop"]); // "value"

let arr = [1, 2, 3];
console.log(arr[0]); // 1

function greet(name) {
  console.log("Hello, " + name);
}
greet("Alice"); // "Hello, Alice"
