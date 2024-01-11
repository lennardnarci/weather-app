import React from "react";
import { ReactComponent as LocationIcon } from "../../public/icons/location.svg";

const Location = () => {
  return (
    <div className="location">
      <LocationIcon />
      <h4 className="location-text">
        <span className="bold">Stockholm</span>, Sweden
      </h4>
    </div>
  );
};

export default Location;
