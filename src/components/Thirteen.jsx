//Weather API
import React, { useEffect, useState } from "react";

function Thirteen() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=53cbf6b7bd02a2df9591c91dca9a2b85`
        )
          .then((response) => response.json())
          .then((data) => setWeather(data));
      });
    }
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Current Weather</h2>
          <p>Tempreture: {(weather.main.temp)-273.15}</p>
          <p>Conditons: {weather.weather[0].description}</p>
        </div>
      ) : (
        <div>
          <p>Loading..............</p>
        </div>
      )}
    </div>
  );
}

export default Thirteen;
