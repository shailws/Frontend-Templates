const searchInput = document.querySelector(".search-input");
const currentWeatherDiv = document.querySelector(".current-weather");
const locationButton = document.querySelector(".location-button");

const API_KEY = "c80db17dbe8e4b63af494556250605";

const getWeatherDetails = async (API_URL) => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    // console.log(data);

    document.body.classList.remove("show-no-results");

    const temperature = Math.floor(data.current.temp_c);
    const description = data.current.condition.text;
    const weatherIcon = data.current.condition.icon;

    currentWeatherDiv.querySelector(
      ".temperature"
    ).innerHTML = `${temperature}<span>°C</span>`;
    currentWeatherDiv.querySelector(".description").innerText = description;
    currentWeatherDiv.querySelector(".weather-icon").src = weatherIcon;

    searchInput.value = data.location.name;
  } catch (error) {
    console.error("Weather fetch error:", error.message);
    document.body.classList.add("show-no-results");
  }
};

const setupWeatherRequest = (cityName) => {
  const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;
  getWeatherDetails(API_URL);
};

searchInput.addEventListener("keyup", (e) => {
  const cityName = searchInput.value.trim();
  if (e.key === "Enter" && cityName) {
    setupWeatherRequest(cityName);
  }
});

locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      // console.log(position);
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${latitude},${longitude}`;
      getWeatherDetails(API_URL);
    },
    () => {
      alert(
        "Location access denied. Please enable permissions to use this feature."
      );
    }
  );
});

// Default city
setupWeatherRequest("London");
