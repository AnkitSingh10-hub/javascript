function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Async operation completed.");
      callback(); // Call the provided callback function
    }, 3000);
  }
  
  function callbackFunction() {
    console.log("Callback function executed.");
  }
  
  doSomethingAsync(callbackFunction);
  