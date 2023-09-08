fetch('https://api.example.com/data/123', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json', // Optional headers
        // Add any other headers as needed
    },
})
    .then(response => {
        if (response.status === 204) {
            console.log('Resource deleted successfully');
        } else {
            console.error('Error:', response.statusText);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
