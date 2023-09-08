const updatedData = {
    key1: 'new-value1',
    key2: 'new-value2',
};

fetch('https://api.example.com/data/123', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json', // Specify the content type
        // Add any other headers as needed
    },
    body: JSON.stringify(updatedData), // Convert data to JSON
})
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process the response data
    })
    .catch(error => {
        console.error('Error:', error);
    });
