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
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${
          searchValue ? searchValue : "Stockholm"
        }&days=7`;

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

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="weather-results">
      <Card
        index="0"
        isOpen={openIndex === 0}
        searchValue={searchValue}
        title={getDayByIndex(0)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(0)}
      />
      <Card
        index="1"
        isOpen={openIndex === 1}
        searchValue={searchValue}
        title={getDayByIndex(1)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(1)}
      />
      <Card
        index="2"
        isOpen={openIndex === 2}
        searchValue={searchValue}
        title={getDayByIndex(2)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(2)}
      />
      <Card
        index="3"
        isOpen={openIndex === 3}
        searchValue={searchValue}
        title={getDayByIndex(3)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(3)}
      />
      <Card
        index="4"
        isOpen={openIndex === 4}
        searchValue={searchValue}
        title={getDayByIndex(4)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(4)}
      />
      <Card
        index="5"
        isOpen={openIndex === 5}
        searchValue={searchValue}
        title={getDayByIndex(5)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(5)}
      />
      <Card
        index="6"
        isOpen={openIndex === 6}
        searchValue={searchValue}
        title={getDayByIndex(6)}
        weatherData={weatherData}
        onOpen={() => setOpenIndex(6)}
      />
    </div>
  );
};

export default WeatherResults;