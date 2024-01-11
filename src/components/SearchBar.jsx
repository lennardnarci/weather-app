import React from "react";
import { searchIcon } from "../../public/icons/search.svg";

const SearchBar = () => {
  return (
    <div className="search">
      <input
        className="search-bar"
        type="text"
        placeholder="Search for city..."
      />
    </div>
  );
};

export default SearchBar;
