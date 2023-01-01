import React from "react";

import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Istanbul",
    temperature: 16,
    date: "Sunday 12:22",
    description: "Cloudy",
    humidity: 80,
    wind: 10
  };

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
            <button className="btn btn-success" id="current-button">
              Current
            </button>
          </div>
        </div>
      </form>
      <h1 id="city">{weatherData.city}</h1>
      <ul>
        <li id="current-date">{weatherData.date}</li>
        <li id="forecast">{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="cloudy icon"
              className="weather-icon float-left"
            />
            <div className="float-left">
              <span className="temperature float-left" id="temperature">
                {weatherData.temperature}
              </span>
              <span class="units">
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
            <li id="humidity">Humidity: {weatherData.humidity}%</li>
            <li id="wind">Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
