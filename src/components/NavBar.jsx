import React from "react";
import Location from "./Location";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <header className="nav-bar">
      <Location />
      <SearchBar />
      <ThemeSwitcher />
    </header>
  );
};

export default NavBar;
