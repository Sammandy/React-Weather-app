import React from "react";

function FavoriteCities({ favorites, setWeather }) {
  const fetchFavoriteWeather = async (city) => {
    const apiKey = "your_api_key";
    const url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  return (
    <div className="favorite-cities">
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((city, index) => (
          <li key={index}>
            <button onClick={() => fetchFavoriteWeather(city)}>
              {city}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCities;
