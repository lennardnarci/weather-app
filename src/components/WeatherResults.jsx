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
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const WeatherResults = ({ searchValue }) => {
  const getDayByIndex = (index) => {
    const totalDays = days.length;
    return days[(now.getDay() + index) % totalDays];
  };

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (!searchValue) return;

    const fetchWeatherData = async () => {
      try {
        const apiKey = "0e17d6dc152f4c4da11184526240901";
        const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${
          searchValue ? searchValue : "Stockholm"
        }&days=7`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        console.log(data);
        if (!data.error) {
          setWeatherData(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
    setOpenIndex(0);
  }, [searchValue]);

  const [openIndex, setOpenIndex] = useState(0);
  const [timeIndex, setTimeIndex] = useState(0);

  const cards = () => {
    const cardComponents = [];
    for (
      let i = 0;
      i < Math.min(weatherData.forecast.forecastday.length, 7);
      i++
    ) {
      cardComponents.push(
        <Card
          index={i}
          isOpen={openIndex === i}
          show={timeIndex === 1}
          searchValue={searchValue}
          title={getDayByIndex(i)}
          month={months[now.getMonth()].slice(0, 3)}
          weatherData={weatherData}
          onOpen={() => setOpenIndex(i)}
          key={i}
        />
      );
    }
    return cardComponents;
  };

  return (
    <>
      <div className="time-selector">
        <button
          className={`today-button ${timeIndex === 0 ? "active" : ""}`}
          onClick={() => {
            setOpenIndex(0);
            setTimeIndex(0);
          }}
        >
          Today
        </button>
        <button
          className={`week-button ${timeIndex === 1 ? "active" : ""}`}
          onClick={() => setTimeIndex(1)}
        >
          7 Days
        </button>
      </div>
      <div className="weather-results">{weatherData && <>{cards()}</>}</div>
    </>
  );
};

export default WeatherResults;
