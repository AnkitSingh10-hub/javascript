const dataToSend = {
    key1: 'value1',
    key2: 'value2',
};

fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json', // Specify the content type
        // Add any other headers as needed
    },
    body: JSON.stringify(dataToSend), // Convert data to JSON
})
    .then(response => response.json())
    .then(data => {
        console.log(data); // Process the response data
    })
    .catch(error => {
        console.error('Error:', error);
    });
