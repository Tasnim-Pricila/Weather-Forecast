// API Key 
const API_KEY = '60fe390f1fef7869eec0538aad5c0b5e';

// Load By Dhaaka City Every Time 
const loadByDhakaCity = () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Dhaka&units=metric&appid=${API_KEY}`;
    fetch(url)
    .then(response => response.json())
    .then(data => showWeather(data));
}
loadByDhakaCity();

// Search By City Name 
const loadByCityName = () => {
    const cityName = document.getElementById('city-name').value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    // console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => showWeather(data));
}

// Get dynamic inner text 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

// Show Weather Details 
const showWeather = (details) => {
    setInnerText('city', details.name);
    setInnerText('temperature', details.main.temp);
    setInnerText('condition', details.weather[0].main );
    const weatherIcon = document.getElementById('weather-icon');
    const iconUrl = `http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);
}