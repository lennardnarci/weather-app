import React from "react";
import { useState, useEffect } from "react";

const Card = ({ index, isOpen, searchValue, title }) => {
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
    <div className={`card ${isOpen ? "open" : ""}`} key={index}>
      {weatherData && (
        <>
          <div className="card-top">
            <h2 className="card-top-text">
              {isOpen ? title : title.slice(0, 3)}
            </h2>
          </div>
          <div className="card-body">
            <img
              src={weatherData.forecast.forecastday[index].day.condition.icon}
              alt="weather image"
              className="card-img"
            />
            <h1 className="card-temp">
              {Math.round(
                weatherData.forecast.forecastday[index].day.maxtemp_c
              )}
              °
            </h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
