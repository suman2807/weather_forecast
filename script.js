const apiKey = '271f8498c0a46931bc28cd21a70031dd';

async function getWeather(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const loading = document.getElementById('loading');
    const result = document.getElementById('weatherResult');
    
    loading.style.display = 'block';
    result.innerHTML = '';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        
        loading.style.display = 'none';
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            result.innerHTML = `<p>${data.message || 'City not found'}. Please try again.</p>`;
        }
    } catch (error) {
        loading.style.display = 'none';
        result.innerHTML = `<p>Error: ${error.message}. Please try again later.</p>`;
    }
}

function displayWeather(data) {
    const weather = data.weather[0].description;
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const windSpeed = data.wind.speed;
    const icon = data.weather[0].icon;

    const weatherHtml = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="${weather}" class="weather-icon">
        <p><strong>Weather:</strong> ${weather.charAt(0).toUpperCase() + weather.slice(1)}</p>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
    `;
    document.getElementById('weatherResult').innerHTML = weatherHtml;
}

async function getWeatherByCoords(lat, lon) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const loading = document.getElementById('loading');
    const result = document.getElementById('weatherResult');
    
    loading.style.display = 'block';
    result.innerHTML = '';

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Weather data not available');
        const data = await response.json();
        
        loading.style.display = 'none';
        if (data.cod === 200) {
            displayWeather(data);
        }
    } catch (error) {
        loading.style.display = 'none';
        result.innerHTML = `<p>Error: ${error.message}. Please try again later.</p>`;
    }
}

function getCurrentLocationWeather() {
    if (!navigator.geolocation) {
        alert('Geolocation is not supported by your browser.');
        return;
    }
    
    navigator.geolocation.getCurrentPosition(
        position => {
            const { latitude, longitude } = position.coords;
            getWeatherByCoords(latitude, longitude);
        },
        error => {
            alert('Unable to access location: ' + error.message);
        }
    );
}

// Event Listeners
document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city) getWeather(city);
    else alert('Please enter a city name.');
});

document.getElementById('cityInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.getElementById('searchBtn').click();
});

document.getElementById('geoBtn').addEventListener('click', getCurrentLocationWeather);

document.getElementById('toggleTheme').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.getElementById('toggleTheme').textContent = isDark ? '☀️' : '🌙';
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('toggleTheme').textContent = '☀️';
}