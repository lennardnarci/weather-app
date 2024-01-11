import React from "react";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = ({ onSearchValueChange }) => {
  return (
    <nav className="nav-bar">
      <SearchBar onSearchValueChange={onSearchValueChange} />
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
