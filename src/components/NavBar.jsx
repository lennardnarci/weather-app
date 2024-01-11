import React from "react";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "./ThemeSwitcher";
import Location from "./Location";

const NavBar = ({ onSearchValueChange, searchValue }) => {
  return (
    <nav className="nav-bar">
      <Location searchValue={searchValue} />
      <SearchBar onSearchValueChange={onSearchValueChange} />
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
