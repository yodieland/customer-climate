npm init -y
npm install express node-fetch
const express = require('express');
const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/getAirQuality', async (req, res) => {
    const zipCode = req.query.zipCode;
    const apiKey = '659646B4-5043-4CD7-8696-5B03248B98C6';
    const url = `https://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zipCode}&date=2024-11-11&distance=25&API_KEY=659646B4-5043-4CD7-8696-5B03248B98C6`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
            res.json(data);  // Send back the data
        } else {
            res.status(404).send('No data available for this ZIP code');
        }
    } catch ( error ) {
        console.error('API call error:', error);
        res.status(500).send('Error fetching air quality data');
    }
});
app.use(express.static('solution'));
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
