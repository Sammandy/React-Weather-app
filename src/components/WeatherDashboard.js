import React, { useState } from "react";
import SearchEngine from "./SearchEngine";
import Forecast from "./Forecast";
import WeatherDisplay from "./WeatherDisplay"; // New component for displaying current weather
import FavoriteCities from "./FavoriteCities"; // New component for managing favorite cities
import axios from "axios";

function WeatherDashboard() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState(null);
  const [favorites, setFavorites] = useState([]);

  const search = async () => {
    const apiKey = "your_api_key";
    const url = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}&units=metric`;
    
    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  const addFavorite = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
    }
  };

  return (
    <div className="weather-dashboard">
      <SearchEngine query={query} setQuery={setQuery} search={search} />
      
      {weather && (
        <>
          <WeatherDisplay weather={weather} addFavorite={addFavorite} />
          <Forecast weather={weather} />
        </>
      )}
      
      <FavoriteCities favorites={favorites} setWeather={setWeather} />
    </div>
  );
}

export default WeatherDashboard;
