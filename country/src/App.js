import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Countries from './components/countries'
require('dotenv').config()

//process env doens't work for some reasons
let api_key = 'aa2da0804d5e4ab5728a8c60d5fa170f'


const baseUrl = `http://api.weatherstack.com/current?access_key=${api_key}&query=`

console.log(baseUrl)

function App() { 
  const [query, setQuery] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState([])


  useEffect(() => {
    console.log('effect')
    axios
      .get(`https://restcountries.eu/rest/v2/all/`)
      .then(response => {
        console.log('promise fulfilled', response.data)
        setCountries(response.data)  
      })
  }, [])

  //query to show nations & weather
  const countriesToShow = query === '' ?
    countries : countries.filter(country => country.name.toLowerCase().includes(query.toLowerCase()))

  const handleQueryChange = (event) => {
    event.preventDefault()

    setQuery(event.target.value)

    if (countries.length !== 0 ) {
      const country = countriesToShow[0]
      const newWeather = []
      axios.get(baseUrl + encodeURI(country.name))
           .then(response => setWeather(newWeather.concat(response.data)))
    }
    
  }

  return (
    <div>
      <form> 
        <div>
          find countries<input value={query} onChange={handleQueryChange}/>
        </div>
        <Countries countries={countriesToShow} setQuery={setQuery} weather={weather}/>
      </form>
    </div>
  );
}

export default App;
