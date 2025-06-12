import styled from "styled-components";

const wrapperBgMap = {
  "clear-day": "#87ceeb",
  "clear-night": "#2c3e50",
  "clouds-day": "#d3d3d3",
  "clouds-night": "#34495e",
  "rain-day": "#a4b0be",
  "rain-night": "#2f3542",
  "snow-day": "#f1f2f6",
  "snow-night": "#ced6e0",
  "thunderstorm-day": "#7b82a1",
  "thunderstorm-night": "#434755",
  "default": "#a7a7a7"
};
export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  background-color: ${({ theme }) => wrapperBgMap[theme] || wrapperBgMap.default};
  color: ${({ theme }) => (theme.includes("night") ? "#fff" : "#000")};
`;

export const Card = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color:#434755;
  background-color: rgba(255, 255, 255, 0.49);
  border-radius: 16px;
  column-gap: 50px;
  row-gap: 0 !important;
  padding: 1.5rem;
  margin-bottom: 2rem;
  min-height: 40vh;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Temp = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin: 1rem 0;
`;

export const Details = styled.div`
  font-size: 1rem;
`;

export const ForecastWrapper = styled.div`
  margin-top: 2rem;
  justify-content: center;
`;

export const ForecastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

export const DayCard = styled.div`
  background-color: rgba(255, 255, 255, 0.49);
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const iconBgMap = {
  "clear-day":"rgb(101, 211, 255)",
  "clear-night":"rgb(26, 41, 114)",
  "clouds-day":"rgb(181, 181, 181)",
  "clouds-night":"rgb(52, 57, 94)",
  "rain-day":"rgb(100, 126, 156)",
  "rain-night":"rgb(54, 62, 97)",
  "snow-day":"rgb(193, 225, 240)",
  "snow-night":"rgb(112, 119, 162)",
  "thunderstorm-day": "rgb(48, 49, 74)",
  "thunderstorm-night": "rgb(48, 49, 74)",
  "default":"rgb(203, 203, 203)"
};
export const WeatherIcon = styled.img`
  background-color: ${({ theme }) => iconBgMap[theme] || wrapperBgMap.default};
  border-radius: 100%;
  margin: ${({main}) => main? "" : "3%"};
  width: ${({main}) => main? "250px" : ""};
  max-width: 50%;
`
