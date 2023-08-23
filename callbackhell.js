function step1(callback) {
    setTimeout(function() {
      console.log("Step 1 completed.");
      callback();
    }, 1000);
  }
  
  function step2(callback) {
    setTimeout(function() {
      console.log("Step 2 completed.");
      callback();
    }, 1000);
  }
  
  function step3(callback) {
    setTimeout(function() {
      console.log("Step 3 completed.");
      callback();
    }, 1000);
  }
  
  function startProcess() {
    step1(function() {
      step2(function() {
        step3(function() {
          console.log("All steps completed.");
        });
      });
    });
  }
  
  startProcess();
  