# Assignment: Weather App
The project for this assignment features the code for a responsive, real-time weather application built with `React`. It fetches current weather and a 5-day forecast using the OpenWeatherMap API and dynamically styles the UI based on weather and time of day.
## Features
* **Real-time Weather**: Fetches current weather using `fetch()` and `useEffect()`.
* **5-Day Forecast**: Forecasted weather in 24-hour intervals
* **Dynamic Styling** Background and card styles that change based on weather (sunny, rainy, cloudy) and time (day, night)
* **Responsive Design**: Seamless styling for both mobile and desktop screen sizes through styled components
* **Unit Testing**: Built-in tests with `Jest` and `React`'s Testing Library
**Live deployment**: Web accessibility through project deployment on Netlify

## Technologies Used
* `HTML5`
* `CSS3`
* `JavaScript (ES6)`
* `React`
* `Jest`
* OpenWeatherMap's API

## Project Structure
```
/src
  ├── components/
  │     ├── Forecast.jsx
  │     ├── WeatherApp.jsx
  │     └── WeatherCard.jsx
  ├── App.js
  ├── index.css
  ├── index.js
  ├── styles.js
  └── /tests
        └── WeatherApp.test.js
```

## `React` Components
The project is composed of four `React` components:
### 1. `App`
Acts as the entry point of the `React` application.
* Sets up routing using `React Router`.
* Renders the root route (`"/"`) which loads the `WeatherApp` component.

### 2. `WeatherApp`
Handles data fetching, state management, and layout composition.
* Fetches **current weather** and **5-day forecast** using the OpenWeatherMap API via `fetch()` and `useEffect()`.
* Manages `loading`, `success`, and `error` states using `useState()`.
* Applies **dynamic background styling** based on weather condition (`Clear`, `Rain`, `Clouds`, etc.) and time (`day` or `night`) using styled components.
* Passes the fetched data to `WeatherCard` and `Forecast` for rendering.

### 3. `WeatherCard`
Displays current weather details.
* Renders the current city name, temperature, condition (e.g., sunny, cloudy), humidity, and wind speed.
* Applies conditional styles (e.g., icon or card color) based on current weather type and time.

### 4. `Forecast`
Displays the 5-day weather forecast.
* Maps over a list of forecast data points and renders simplified summaries (temperature and condition).
* Uses dynamic icons and color styles based on the condition (rain, snow, clear, etc.).

## Getting Started
1. **Clone the repository:**
```bash
git clone https://github.com/adrian-cr/csa-assignment-api-consuming-weather-app.git
cd csa-assignment-api-consuming-weather-app
```
2. **Install dependencies:**
```bash
npm install
```
3. **Start the development server:**
```bash
npm start
```
This will open the app at [http://localhost:3000](http://localhost:3000) in your browser.

## Acessing through the Web
You can also view this application from any browser without any previous setup. Just visit [https://csa-weather-app.netlify.app/](https://csa-weather-app.netlify.app/)
