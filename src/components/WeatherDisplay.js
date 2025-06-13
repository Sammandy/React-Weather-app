import React from "react";

function WeatherDisplay({ weather, addFavorite }) {
  const { city, country, temperature, condition } = weather.data;

  return (
    <div className="weather-display">
      <h2>
        {city}, <span>{country}</span>
      </h2>
      <div className="current-weather">
        <img src={condition.icon_url} alt={condition.description} />
        <div className="temp">
          {Math.round(temperature.current)}°C
        </div>
        <p>{condition.description}</p>
      </div>
      <button onClick={() => addFavorite(city)}>Add to Favorites</button>
    </div>
  );
}

export default WeatherDisplay;

