
const getAirQuality = async (zipCode) => {
    try {
      const apiKey = ' 659646B4-5043-4CD7-8696-5B03248B98C6'; // Replace with your actual API key
      const url = `https://www.airnowapi.org/aq/observation/zipCode/current/?format=application/json&zipCode=${zipCode}&distance=25&API_KEY=${apiKey}`;
  
      // Fetch the data from the API
      const response = await fetch(url);
      
      // Check if the response is okay (status 200-299)
      if (!response.ok) {
        console.error(`Error: ${response.status} ${response.statusText}`);
        return; // Exit the function if there was an error
      }
  
      // Log the full response to check its contents
      console.log('Full response:', response);
  
      // Parse the JSON data
      const data = await response.json();
      console.log('Parsed data:', data);
  
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
    