import React from "react";

const Card = ({ index, isOpen, title, month, weatherData, onOpen }) => {
  function getTitle() {
    if (isOpen && index === "0") {
      return "Today";
    } else if (isOpen) {
      return title;
    } else {
      return title.slice(0, 3);
    }
  }

  return (
    <div
      className={`card ${isOpen ? "open" : ""}`}
      key={index}
      onClick={onOpen}
    >
      {weatherData && (
        <>
          <div className="card-top">
            <h2 className="card-top-text">{getTitle()}</h2>
            <p className="card-top-date">
              {weatherData.forecast.forecastday[index].date.slice(8, 10) +
                "/" +
                weatherData.forecast.forecastday[index].date.slice(5, 7)}
            </p>
            <h3 className="card-date">
              {isOpen
                ? weatherData.forecast.forecastday[index].date.slice(8, 10) +
                  " " +
                  month
                : ""}
            </h3>
          </div>
          <div className="card-body">
            <img
              src={weatherData.forecast.forecastday[index].day.condition.icon}
              alt="weather image"
              className="card-img"
            />
            <p className="card-condition card-details">
              {weatherData.forecast.forecastday[index].day.condition.text}
            </p>
            <h1 className="card-temp">
              {Math.round(
                weatherData.forecast.forecastday[index].day.avgtemp_c
              )}
              °
            </h1>
            <h3 className="card-details">
              Max:{" "}
              {Math.round(
                weatherData.forecast.forecastday[index].day.maxtemp_c
              )}
              ° Min:{" "}
              {Math.round(
                weatherData.forecast.forecastday[index].day.mintemp_c
              )}
              °
            </h3>
            <h3 className="card-details">
              Feels Like:{" "}
              {weatherData.forecast.forecastday[index].hour[11].feelslike_c}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
