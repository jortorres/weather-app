<<<<<<< HEAD
Creating a weather app, using javascript, css, openweather api.
=======
# Weather App

## Overview
This is a simple web-based weather application that fetches and displays current weather data for a specified city using the OpenWeatherMap API. Users can input a city name, and the app shows the temperature (in Celsius), weather description, humidity, wind speed, and a corresponding weather icon. The app features a responsive design with fade-in animations and error handling for invalid city names.

## Features
- Search for weather by city name
- Displays temperature (°C), weather description, humidity (%), and wind speed (km/h)
- Dynamic weather icons based on conditions (Clear, Rain, Snow, Clouds, Haze)
- Error handling for invalid city names (404 response)
- Responsive UI with fade-in animations

## Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge)
- An active internet connection
- An OpenWeatherMap API key (free tier available at [OpenWeatherMap](https://openweathermap.org))

## Setup Instructions
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Install Dependencies**:
   - No external dependencies are required, as the app uses vanilla JavaScript and the OpenWeatherMap API.

3. **Add Your API Key**:
   - The API key has been removed from the source code for security reasons.
   - Sign up at [OpenWeatherMap](https://openweathermap.org) to obtain a free API key.
   - Open `script.js` (or the relevant JavaScript file) and locate the `APIKEY` constant:
     ```javascript
     const APIKEY = 'YOUR_API_KEY_HERE';
     ```
   - Replace `'YOUR_API_KEY_HERE'` with your OpenWeatherMap API key.

4. **Serve the Application**:
   - Host the files on a local server (e.g., using VS Code's Live Server extension or a simple HTTP server).
   - Example using Python:
     ```bash
     python -m http.server 8000
     ```
   - Open your browser and navigate to `http://localhost:8000`.

## Usage
1. Open the app in a web browser.
2. Enter a city name in the search box (e.g., "London").
3. Click the search button (or press Enter).
4. View the weather details, including:
   - Temperature in Celsius
   - Weather description (e.g., "clear sky")
   - Humidity percentage
   - Wind speed in km/h
   - A weather icon matching the current conditions
5. If the city is invalid, a "Not Found" message will appear.

## Project Structure
```
weather-app/
├── index.html        # Main HTML file
├── style.css        # Styles for the app
├── script.js        # JavaScript for API calls and DOM updates
├── images/          # Weather icon images (clear.png, rain.png, snow.png, clouds.png, haze.png)
└── README.md        # This file
```

## Notes
- **API Key Security**: The OpenWeatherMap API key has been removed from the source code to prevent unauthorized use. You must provide your own API key as described in the setup instructions.
- **Units**: The app uses `units=metric` in the API call, so temperatures are in Celsius and wind speeds are converted to km/h (from m/s).
- **Error Handling**: The app handles 404 errors (invalid city) and logs other errors to the console for debugging.
- **Images**: Ensure the `images/` folder contains the required weather icons (`clear.png`, `rain.png`, `snow.png`, `clouds.png`, `haze.png`).

## Troubleshooting
- **Invalid API Key**: If the app doesn’t fetch data, verify your API key is correct and active.
- **Incorrect Temperature**: Ensure the API URL includes `units=metric` and is formatted as a single line.
- **Missing Images**: Confirm the `images/` folder is in the correct directory with the specified icon files.
- **CORS Issues**: If testing locally, use a local server to avoid CORS restrictions.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [OpenWeatherMap](https://openweathermap.org) for providing the weather API.
- Weather icons sourced from [source] (replace with actual source if applicable).
>>>>>>> bd8b208 (Updated images, finished index.js, updatd readme.)
