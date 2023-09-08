fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json', // Optional headers
        // Add any other headers as needed
    },
})
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process the response data
    })
    .catch(error => {
        console.error('Error:', error);
    });
