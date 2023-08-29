const myObject = {
    x: 10,
    y: 20,
    sayHello: function() {
      console.log(`Hello, ${this.x+this.y}!`);
    }
  };
  
  myObject.sayHello(); // "Hello, John!"
  
