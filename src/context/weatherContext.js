import React, { useState, useEffect } from 'react'

export const WeatherContext = React.createContext(null)

const WeatherProvider = ({ children }) => {
    
  const [location, setLocation] = useState("Cape Town")
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      console.log("Fetching Weather for ", location)
    setLoading(true)
    fetch("https://api.weatherapi.com/v1/current.json?key=733ddea29b664ee482f51721211009%20&q="+location)
			.then((response) => response.json())
			.then((data) => {
				console.log("Weather", data);
				setWeather(data);
                setLoading(false)

			});
  },[location])

  const weatherStore = {
    location, 
    setLocation,
    weather,
    loading
  }

  return (<WeatherContext.Provider value={weatherStore}>{children}</WeatherContext.Provider>)
}

export default WeatherProvider;