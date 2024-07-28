document.getElementById('fetch-data').addEventListener('click', async () => {
    try {
      const response = await fetch('/api/items');
      const items = await response.json();
      const container = document.getElementById('data-container');
      container.innerHTML = items.map(item => `<p>${item.name}: ${item.description}</p>`).join('');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
  