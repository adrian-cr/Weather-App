import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WeatherApp from "./components/WeatherApp";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<WeatherApp />} />
    </Routes>
  </Router>
);

export default App;
