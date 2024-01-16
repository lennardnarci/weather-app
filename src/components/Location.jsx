import React from "react";

const Location = ({ searchValue }) => {
  return (
    <div className="location">
      <img src="./icons/location.svg" alt="Location Icon" />
      <h4 className="location-text">
        <span className="bold">
          {searchValue
            ? searchValue.charAt(0).toUpperCase() + searchValue.slice(1)
            : "Undefined"}
        </span>
      </h4>
    </div>
  );
};

export default Location;
