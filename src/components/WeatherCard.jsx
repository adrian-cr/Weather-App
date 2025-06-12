import React from "react";
import { Card, Temp, Details, WeatherIcon } from "../styles";

const WeatherCard = ({ data, theme }) => {
  const { name, main, weather, wind } = data;
  const condition = weather[0].main.toLowerCase();
  const icon = weather[0].icon;

  return (
    <Card condition={condition}>
      <WeatherIcon main={true} theme={theme} src={`https://openweathermap.org/img/wn/${icon}@4x.png`} alt="" />
      <div>
        <h2 style={{fontSize: "30px"}}>{name}</h2>
        <h3 style={{fontSize: "25px"}}>{weather[0].main}</h3>
        <Temp>{Math.round(main.temp)}°C</Temp>
        <Details>
          <div>Humidity: {main.humidity}%</div>
          <div>Wind: {Math.round(wind.speed)} m/s</div>
        </Details>
      </div>

    </Card>
  );
};

export default WeatherCard;
