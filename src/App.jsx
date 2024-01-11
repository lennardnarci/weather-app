import "./App.css";
import NavBar from "./components/NavBar";
import WeatherResults from "./components/WeatherResults";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <WeatherResults />
      </div>
    </>
  );
}

export default App;
