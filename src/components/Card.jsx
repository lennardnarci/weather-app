import React from "react";

const Card = ({ isOpen }) => {
  return (
    <div className={`card ${isOpen ? "open" : ""}`}>
      <div className="card-top">
        <h2 className="card-top-text">Mon</h2>
      </div>
      <div className="card-body">
        <img
          src="https://cdn.weatherapi.com/weather/64x64/day/116.png"
          alt="weather image"
          className="card-img"
        />
        <h1 className="card-temp">16°</h1>
      </div>
    </div>
  );
};

export default Card;
