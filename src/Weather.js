import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      icon: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      description: response.data.weather[0].description,
      date: "Friday, 17:17"

    });
    
    setReady(true);

  }
  if (ready) {
    return (
    <div className="weather-app">
      <form className="search-form" id="search-form">
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
              id="search-input"
              autoFocus="on"
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
      <h1 id="city">{weatherData.city}</h1>
      <ul>
        <li>{weatherData.date}</li>
        <li className="text-capitalize">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.icon}
              alt={weatherData.description}
              className="weather-icon float-left"
            />
            <div className="float-left">
              <span className="temperature float-left" id="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" id="celcius">
                  °C
                </a>{" "}
                |
                <a href="/" id="fahrenheit">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
  } else {
  const apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
  let city = "Istanbul";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
  
}
