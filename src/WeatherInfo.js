import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
        <div className="float-left">
            <WeatherIcon className="weather-icon"
            code={props.data.icon} size={74}
            />
        </div>
            <div className="float-left">
              <span className="temperature float-left">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">
              °C{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>

        </div>
    );

}