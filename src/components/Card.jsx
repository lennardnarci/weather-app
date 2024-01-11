import React from "react";

const Card = ({ index, isOpen, title, weatherData }) => {
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
