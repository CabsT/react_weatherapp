import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function SearchCityForm() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);
  let [search, setSearch] = useState(false);

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter the city..."
        value={city}
        onChange={updateCity}
      />
      <button type="submit">Search</button>
    </form>
  );

  function updateCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Searching for ${city}...`);
    let apiKey = "f0t6f37fo7eacab2cf93452fbe48b35c";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(displayWeather);
  }

  function displayWeather(response) {
    setSearch(true);
    setWeather(response.data);
    console.log(response.data);
  }
  if (search) {
    return (
      <div className="weather">
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature.current)}°C</li>
          <li>Description: {weather.condition.description}</li>
          <li>Humidity: {weather.temperature.humidity}%</li>
          <li>Wind: {weather.wind.speed}km/h</li>
          <li>{weather.condition.icon}</li>
          <li className="icon">
            <img src={weather.condition.icon_url} alt="waether icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
