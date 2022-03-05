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
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(data => showWeather(data));
}

// Get dynamic inner text 
const setInnerText = (id, text) => {
    document.getElementById(id).innerText =`${text ? text : 'N/A'}`;
}
// Unix Time to GMT Time 
const localTime = (unixTime) => {
    const timeStamp = unixTime;
    let localDate = new Date(timeStamp * 1000);
    let hours = localDate.getHours().toString().padStart(2,0) ;
    let minutes = localDate.getMinutes().toString().padStart(2,0);
    let seconds = localDate.getSeconds().toString().padStart(2,0);
    let result = `${hours}:${minutes}:${seconds}`;
    return result;
}
// Show Weather Details 
const showWeather = (details) => {
    setInnerText('city', details.name);
    setInnerText('temperature', details.main.temp);
    setInnerText('condition', details.weather[0].main );
    const weatherIcon = document.getElementById('weather-icon');
    const iconUrl = `http://openweathermap.org/img/wn/${details.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconUrl);

    setInnerText('feels-like', details.main.feels_like);
    setInnerText('max-temp', details.main.temp_max);
    setInnerText('min-temp', details.main.temp_min);
    setInnerText('cloudiness', details.clouds.all);
    setInnerText('humidity', details.main.humidity);
    setInnerText('pressure', details.main.pressure);
    setInnerText('wind-speed', details.wind.speed);
    setInnerText('sea-level', details.main.sea_level);  
    setInnerText('sunrise', localTime(details.sys.sunrise));
    setInnerText('sunset', localTime(details.sys.sunset));    
}
    
    