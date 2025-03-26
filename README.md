# Weather Forecast App

## Description
The Weather Forecast App provides real-time weather updates for any city. Users can search for a city's weather manually or use their current location for instant results. The app includes a responsive UI, a theme toggle for light/dark mode, and smooth animations for a great user experience.

## Features
- Fetch real-time weather data using OpenWeatherMap API
- Search weather by city name
- Get weather using current location (Geolocation API)
- Displays temperature, humidity, wind speed, and weather conditions
- Dark mode toggle for better readability
- Mobile-friendly and responsive UI

## Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- OpenWeatherMap API

## Installation & Usage
1. Clone the repository or download the files.
   ```bash
   git clone https://github.com/yourusername/weather-forecast-app.git
   ```
2. Navigate to the project directory and open `index.html` in a browser.
3. Enter a city name and click "Get Weather" or use the "📍" button for location-based weather.

## File Structure
- `index.html` - Main HTML file containing the structure of the app.
- `style.css` - Styling for the app, including dark mode support.
- `script.js` - JavaScript file handling API requests, event listeners, and UI updates.

## API Key Setup
This app uses OpenWeatherMap API. Replace the existing API key in `script.js` with your own:
```js
const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
```

