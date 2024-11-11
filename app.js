
const getAirQuality = async (zipCode) => {
    try {
      const apiKey = '659646B4-5043-4CD7-8696-5B03248B98C6'; // Replace with your actual API key
      const url = `https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipCode}&distance=25&API_KEY=${apiKey}`;
  
      const response = await fetch(url);
  
      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return;
      }
  
      const data = await response.json();
      console.log('Parsed data:', data);
  
      // Display the data in the result div
      const resultDiv = document.getElementById("result");
      resultDiv.innerHTML = ''; // Clear previous content
  
      data.forEach((observation) => {
        const observationHtml = `
          <div>
            <p><strong>Date Observed:</strong> ${observation.DateObserved}</p>
            <p><strong>Time:</strong> ${observation.HourObserved} ${observation.LocalTimeZone}</p>
            <p><strong>Location:</strong> ${observation.ReportingArea}, ${observation.StateCode}</p>
            <p><strong>AQI:</strong> ${observation.AQI}</p>
            <p><strong>Category:</strong> ${observation.Category.Name}</p>
          </div>
          <hr>
        `;
        resultDiv.innerHTML += observationHtml;
      });
  
    } catch (error) {
      console.error("Error fetching air quality:", error);
    }
  };
  
// Event listener for form submission
document.getElementById("airQualityForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    const zipCode = document.getElementById("zipCode").value;
    getAirQuality(zipCode); // Call the function with the ZIP code
  });
    