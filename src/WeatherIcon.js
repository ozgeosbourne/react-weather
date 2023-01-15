import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
   console.log(props.code);
 const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "09d": "RAIN",
    "010d": "RAIN",
    "011d": "SLEET",
    "013d": "SNOW",
    "050d": "FOG"
 };

    return (
    <ReactAnimatedWeather
    icon={codeMapping[props.code]}
    color="#272142"
    size={props.size}
    animate={true}
  />
    );
}