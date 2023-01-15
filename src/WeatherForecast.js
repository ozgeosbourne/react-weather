import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }


    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return (
        <div className="WeatherForecast">
        <div className="row">
        <div className="col">
            <div className="forecast-day">Mon</div>
            <WeatherIcon code="01d" size={36} />
            <div className="forecast-temp">
                <span className="forecast-max">19</span>
                <span className="forecast-min">10</span>
            </div>
        </div>
        </div>
    </div>
    )
    
}