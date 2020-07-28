import React from 'react'


const Button = ({tag, handle}) => (
    <>
      <button onClick={handle}> {tag}</button>
    </>
  ) 

const Weather = ({weather,country}) => (
    <div>
    <h2>Weather in {country.name}</h2>
    <p><b>temperature: </b> {weather.current.temperature} </p>
    <img src={weather.current.weather_icons[0]} style={{width:100, height:100}} />
    <p><b>wind: </b>{weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
    </div>
)

const Country = ({country}) => {
    return (
      <div>
        <h2>{country.name}</h2>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h3>languages</h3>
          <ul>
            {country.languages.map(language => <li>{language.name}</li>)}
          </ul>
        <img src={country.flag} style={{width: 200 , height: 200 }} />
      </div>
    )
}


const Countries = ({countries, setQuery, weather}) => {
  
    if (countries.length === 1) {
      return (
        <>
          <Country country={countries[0]} />
          <Weather country={countries[0]} weather={weather[0]} />
        </>
      )
    }
    
    if (countries.length < 10) {
      return (
        <>
          {countries.map(country => 
          <div>
            <p>{country.name}
            <Button tag="show" handle={() => setQuery(country.name)}/>
            </p>
          </div>)}
        </>
      )
    } else if (countries.length === 250) {
      return (<>
        <p>please type</p>
      </>)
    } else if (countries.length > 10) {
      return (
        <>
          <p>please be more specific</p>
        </>
      )
    } 
  }

export default Countries