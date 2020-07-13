import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ShowCountry from './components/ShowCountry'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterCountries, setFilterCountries] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (e) => {
    setFilterCountries(e.target.value)
  }

  return (
    <div>
      find countries <input
        value={filterCountries}
        onChange={handleFilterChange}
      />

      <ShowCountry
        countries={countries}
        filterCountries={filterCountries}
        setFilterCountries={setFilterCountries}
      />
    </div>
  )
}

export default App;
