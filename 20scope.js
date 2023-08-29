function myFunction() {
    var localVar = "I'm local";
    console.log(localVar); // Accessible here
  }
  
  // console.log(localVar); // This would result in an error since localVar is not accessible here
myFunction()
  
var globalVariable = "I'm global";

function printGlobal() {
  console.log(globalVariable); // Accessible here
}

console.log(globalVariable); // Accessible here


if (true) {
    var x = 10; // This has function or global scope
    let y = 20; // This has block scope
    const z = 30; // This also has block scope
  }
  
  console.log(x); // Accessible here
  // console.log(y); // This would result in an error since y is not accessible here
  // console.log(z); // This would result in an error since z is not accessible here
  