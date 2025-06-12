import React from "react";
import { ForecastWrapper, ForecastGrid, DayCard, WeatherIcon } from "../styles";


const Forecast = ({ forecast, theme }) => {
  return (
    <ForecastWrapper>
      <h2>5-Day Forecast</h2>
      <ForecastGrid>
        {forecast.map((item, index) => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString(undefined, { weekday: "short" });
          const temp = Math.round(item.main.temp);
          const condition = item.weather[0].main;
          const icon = item.weather[0].icon;

          return (
            <DayCard key={index} condition={condition.toLowerCase()}>
              <div>{day}</div>
              <div>{temp}°C</div>
              <WeatherIcon theme={theme} src={`https://openweathermap.org/img/wn/${icon}@4x.png`}/>
              <div>{condition}</div>
            </DayCard>
          );
        })}
      </ForecastGrid>
    </ForecastWrapper>
  );
};

export default Forecast;
