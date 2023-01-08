import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      description: response.data.weather[0].description,

    }); 
  }
  function search() {
  const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
   //search for the city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
    <div className="weather-app">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-dark"
            />
          </div>
          <div className="col-3">
            <button className="btn btn-success w-100" id="current-button">
              Current
            </button>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
    </div>
  );
  } else {
    search();
    return "Loading...";
  }
  
}
