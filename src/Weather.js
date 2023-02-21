import React, { useEffect, useState } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState();
  //podmienić wartość API_KEY na wygenerowany klucz na stronie: openweathermap.org
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    getWeatherData();
  }, []);

  const getWeatherData = async () => {
    const lat = `50.2584`,
      lon = `19.0275`;

    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const dataJson = await data.json();
    setWeatherData(dataJson);
  };

  console.log(weatherData);

  return <div></div>;
};

export default Weather;
