document.getElementById('airQualityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const zipCode = document.getElementById('zipCode').value;
    fetch(`/getAirQuality?zipCode=${zipCode}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('result').innerHTML = `Current AQI: ${data.AQI} - ${data.Category.Name}`;
        })
        .catch(error => {
            console.error('Error fetching air quality:', error);
            document.getElementById('result').innerHTML = 'Failed to fetch air quality.';
        });
});
