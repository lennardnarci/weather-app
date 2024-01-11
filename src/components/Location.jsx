import React from "react";
import { locationIcon } from "../../public/icons/location.svg";

const Location = () => {
  return (
    <div className="location">
      {locationIcon}
      <h4 className="location-text">
        <span className="bold">Stockholm</span>, Sweden
      </h4>
    </div>
  );
};

export default Location;
