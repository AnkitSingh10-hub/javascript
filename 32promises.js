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

// Using the Promise
asyncTask()
    .then(result => {
        console.log(result); // "Task completed!"
    })
    .catch(error => {
        console.error(error); // if it failed
    });
