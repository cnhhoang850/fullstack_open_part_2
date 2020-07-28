import React from 'react'

const Weather = ({weather,country}) => (
    <div>
    <h2>Weather in {country.name}</h2>
    <p><b>temperature: </b> {weather.current.temperature} </p>
    <img src={weather.current.weather_icons[0]} style={{width:100, height:100}} />
    <p><b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>
)

export default Weather