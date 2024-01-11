import React from "react";
import Card from "./Card";

const WeatherResults = () => {
  return (
    <div className="weather-results">
      <Card isOpen="true" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default WeatherResults;
