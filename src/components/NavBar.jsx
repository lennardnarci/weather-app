import React from "react";
import Location from "./Location";
import SearchBar from "./SearchBar";
import ThemeSwitcher from "./ThemeSwitcher";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Location />
      <SearchBar />
      <ThemeSwitcher />
    </nav>
  );
};

export default NavBar;
