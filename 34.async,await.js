

async function fetchData() {
  try {
    const result = await fetch('https://example.com/api/data');
    const data = await result.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}
