import React from "react";
import Card from "./Card";

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

  return (
    <div className="weather-results">
      <Card
        index="0"
        isOpen={true}
        searchValue={searchValue}
        title={getDayByIndex(0)}
      />
      <Card
        index="1"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(1)}
      />
      <Card
        index="2"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(2)}
      />
      <Card
        index="3"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(3)}
      />
      <Card
        index="4"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(4)}
      />
      <Card
        index="5"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(5)}
      />
      <Card
        index="6"
        isOpen={false}
        searchValue={searchValue}
        title={getDayByIndex(6)}
      />
    </div>
  );
};

export default WeatherResults;
