import React from "react";

const Location = ({ searchValue }) => {
  return (
    <div className="location">
      <img src="../../public/icons/location.svg" alt="Location Icon" />
      <h4 className="location-text">
        <span className="bold">
          {searchValue.charAt(0).toUpperCase() + searchValue.slice(1)}
        </span>
      </h4>
    </div>
  );
};

export default Location;
