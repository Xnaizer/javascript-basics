const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "d343eec2e4ed1b59dc6af3e2a244f733";

weatherForm.addEventListener("submit", async event =>{
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(weatherData);
    }
    else{
        displayError("Please Enter A City");
    }
});

async function getWeatherData(city){
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather data: ", error);
        return null;
    }
}

function displayWeatherInfo(data){
    if(data){
        const cityDisplay = document.createElement("h1");
        cityDisplay.textContent = data.name;
        cityDisplay.classList.add("cityDisplay");

        const tempDisplay = document.createElement("p");
        tempDisplay.textContent = `Temperature: ${data.main.temp}°C`;
        tempDisplay.classList.add("tempDisplay");

        const humidityDisplay = document.createElement("p");
        humidityDisplay.textContent = `Humidity: ${data.main.humidity}%`;
        humidityDisplay.classList.add("humidityDisplay");

        const descDisplay = document.createElement("p");
        descDisplay.textContent = `Description: ${data.weather[0].description}`;
        descDisplay.classList.add("descDisplay");

        const weatherEmoji = document.createElement("p");
        weatherEmoji.textContent = getWeatherEmoji(data.weather[0].id);
        weatherEmoji.classList.add("weatherEmoji");

        card.innerHTML = '';
        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(weatherEmoji);

        card.style.display = "block";
    }
    else{
        displayError("Weather data not found");
    }
}

function getWeatherEmoji(weatherId){
    // Return appropriate emoji based on weather ID
    // Example implementation, you can extend this as per your requirements
    if (weatherId >= 200 && weatherId < 300) {
        return "⛈️"; // Thunderstorm
    } else if (weatherId >= 300 && weatherId < 500) {
        return "🌧️"; // Drizzle
    } else if (weatherId >= 500 && weatherId < 600) {
        return "🌧️"; // Rain
    } else if (weatherId >= 600 && weatherId < 700) {
        return "❄️"; // Snow
    } else if (weatherId >= 700 && weatherId < 800) {
        return "🌫️"; // Atmosphere
    } else if (weatherId === 800) {
        return "☀️"; // Clear
    } else if (weatherId > 800 && weatherId < 900) {
        return "☁️"; // Clouds
    } else {
        return "❓"; // Unknown
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    card.innerHTML = '';
    card.appendChild(errorDisplay);
    card.style.display = "block";
}
