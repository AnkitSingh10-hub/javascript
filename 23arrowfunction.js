// Basic syntax
const functionName = (parameters) => {
    console.log(`This is 1st function call with parameter ${parameters}`)
};

functionName(100)


const singleParamFunction = parameter => {
    console.log(`This is 2nd function call with parameter ${parameter}`)

};

singleParamFunction(200)

const add = (a, b) => a + b;

const sum = add(50, 50)

console.log(sum)


// Traditional function expression
const multiply = function (x, y) {
    return x * y;
};

// Arrow function equivalent
const multiplyArrow = (x, y) => x * y;

console.log(multiplyArrow(5, 5))
