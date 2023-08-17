const API_KEY = "0cf6c7b6280a7250dca6f0c2e5f5285f";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const res = await fetch(API_URL+ city + `&appid=${API_KEY}`);
    if(res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await res.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "images/clouds.png"
        } 
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "images/clear.png"
        } 
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        } 
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png"
        } 
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png"
        }
        else if(data.weather[0].main == "Wind"){
            weatherIcon.src = "images/wind.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "images/mist.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

