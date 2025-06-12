import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import Forecast from "./Forecast";
import {Wrapper} from "../styles";

const API_KEY = "05974b4b75ba8d5bd5e39c34c3de0a87"; // Replace with your actual OpenWeatherMap API key
const CITY = "Guadalajara";


const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const resCurrent = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const resForecast = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
        );

        if (!resCurrent.ok || !resForecast.ok) {
          throw new Error("Failed to fetch weather data");
        }

        const currentData = await resCurrent.json();
        const forecastRaw = await resForecast.json();

        // Extract daily forecasts (every 8th item = approx 1 day)
        const dailyForecasts = forecastRaw.list.filter((_, index) => index % 8 === 0);
/*         const dailyForecasts = staticForecast.list.filter((_, index) => index % 8 === 0);
 */
        setWeatherData(currentData);
        //setWeatherData(staticCurrent);
        setForecastData(dailyForecasts);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const getTheme = () => {
    if (!weatherData) return "day";
    const weather = weatherData.weather[0].main.toLowerCase();
    const hour = new Date().getHours();
    const isNight = hour < 6 || hour > 18;

    if (isNight) return `${weather}-night`;
    return `${weather}-day`;
  };

  const theme = getTheme();

  if (loading) return <Wrapper theme={theme}>Loading weather data...</Wrapper>;
  if (error) return <Wrapper theme={theme}>Error: {error}</Wrapper>;

  return (
    <Wrapper theme={theme}>
      <WeatherCard theme={theme} data={weatherData} />
      <Forecast theme={theme} forecast={forecastData} />
    </Wrapper>
  );
};

export default WeatherApp;
