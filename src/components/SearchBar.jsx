import React from "react";
import { useState } from "react";

const SearchBar = ({ onSearchValueChange }) => {
  const [searchValue, setSearchValue] = useState("Stockholm");

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchValueChange(searchValue);
    }
  };

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for city..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <button className="search-button">
        <img src="../../public/icons/arrow.svg" alt="Search Button" />
      </button>
    </div>
  );
};

export default SearchBar;
