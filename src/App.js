import "./App.css";
import SearchCityForm from "./WeatherSearchForm";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchCityForm />
      <p>
        This is the link to my{" "}
        <a
          href="https://github.com/CabsT/react_weatherapp"
          target="_blank"
          rel="noreferrer"
        >
          github repository
        </a>
      </p>
    </div>
  );
}
