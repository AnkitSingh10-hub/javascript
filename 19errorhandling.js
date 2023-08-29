try {
  // Attempting to execute some code that might throw an exception
  let result = 1 / 0;
  console.log(`result is ${result}`);
} catch (error) {
  // Handling the exception if it occurs
  console.error("An error occurred:", error);
} finally {
  // Cleanup or finalization code
  console.log("Finally block executed.");
}
