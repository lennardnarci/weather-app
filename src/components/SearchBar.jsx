import React from "react";
import { useRef } from "react";

const SearchBar = ({ onSearchValueChange }) => {
  const searchValue = useRef();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearchValueChange(searchValue.current.value);
    }
  };

  const handleClick = () => {
    onSearchValueChange(searchValue.current.value);
  };

  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for city..."
        ref={searchValue}
        onKeyDown={handleKeyDown}
        onClick={() => (searchValue.current.value = "")}
      />
      <button className="search-button" onClick={handleClick}>
        <img
          src="./icons/arrow.svg"
          alt="Search Button"
          className="arrow-svg"
        />
      </button>
    </div>
  );
};

export default SearchBar;
