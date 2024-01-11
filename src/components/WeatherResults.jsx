import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";

const now = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const WeatherResults = ({ searchValue }) => {
  const getDayByIndex = (index) => {
    const totalDays = days.length;
    return days[(now.getDay() + index) % totalDays];
  };

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const apiKey = "0e17d6dc152f4c4da11184526240901";
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${searchValue}&days=7`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data);
        setWeatherData(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [searchValue]);

  return (
    <div className="weather-results">
      <Card
        index="0"
        isOpen={true}
        searchValue={searchValue}
        title={getDayByIndex(0)}
        weatherData={weatherData}
      />
      <Card
        index="1"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(1)}
        weatherData={weatherData}
      />
      <Card
        index="2"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(2)}
        weatherData={weatherData}
      />
      <Card
        index="3"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(3)}
        weatherData={weatherData}
      />
      <Card
        index="4"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(4)}
        weatherData={weatherData}
      />
      <Card
        index="5"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(5)}
        weatherData={weatherData}
      />
      <Card
        index="6"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(6)}
        weatherData={weatherData}
      />
    </div>
  );
};

export default WeatherResults;
