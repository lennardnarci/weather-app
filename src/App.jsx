import "./App.css";
import NavBar from "./components/NavBar";
import WeatherResults from "./components/WeatherResults";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("Stockholm");

  const handleSearchValueChange = (newSearchValue) => {
    setSearchValue(newSearchValue);
  };
  return (
    <>
      <div className="container">
        <NavBar
          onSearchValueChange={handleSearchValueChange}
          searchValue={searchValue}
        />
        <WeatherResults searchValue={searchValue} />
      </div>
    </>
  );
}

export default App;
