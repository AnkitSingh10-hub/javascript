function asyncTask() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Task completed!");
            } else {
                reject("Task failed.");
            }
        }, 2000);
    });
}
// promises are objects that act as a placeholder for values that could be successfully returned/failed to return after an async activity
// Using the Promise
asyncTask()
    .then(result => {
        console.log(result); // "Task completed!"
    })
    .catch(error => {
        console.error(error); // if it failed
    });
