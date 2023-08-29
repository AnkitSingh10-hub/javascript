// Using var
function exampleVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // Outputs 10, because var is function-scoped and global scoped
}

// Using let
function exampleLet() {
  if (true) {
    let y = 20;
  }
  console.log(y); // Throws ReferenceError, because y is block-scoped
}

// Using const
function exampleConst() {
  const z = 30;
  z = 40; // Throws an error, because z cannot be reassigned
}
