document
  .getElementById("getWeatherButton")
  .addEventListener("click", function () {
    const city = document.getElementById("cityInput").value;
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = data.main.temp;
        document.getElementById("description").textContent =
          data.weather[0].description;
        document.getElementById("weatherDisplay").classList.remove("hidden");
      })
      .catch((error) => {
        alert("Error fetching weather data: " + error);
      });
  });
