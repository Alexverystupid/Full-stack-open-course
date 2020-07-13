import React from 'react'

const Language = ({ languages }) => {
  return (
    languages.map(language =>
      <li key={language.name}>
        {language.name}
      </li>
    )
  )
}

const ShowCountry = ({ countries, filterCountries, setFilterCountries }) => {
  const data = countries.filter(country => {
    return country.name.toLowerCase().includes(filterCountries.toLowerCase())
  })

  const handleClick = (e) => {
    // console.log(e.target.value)
    setFilterCountries(e.target.value)
  }

  if (filterCountries === '' || data.length === 0) {
    return (
      <div>
        Enter country name to search
      </div>
    )
  } else if (data.length > 10) {
    return (
      <div>
        Too many matches, specify another filter
      </div>
    )
  } else if (data.length > 1) {
    return (
      data.map(country => (
        <li key={country.name}>
          {country.name}
          <button value={country.name} onClick={handleClick}>show</button>
        </li>
      ))
    )
  } else {
    // console.log(a[0])
    return (
      <div>
        <h3>{data[0].name}</h3>
        <p>capital {data[0].capital}</p>
        <p>population {data[0].population}</p>
        <h4>languages</h4>
        <ul>
          <Language languages={data[0].languages} />
        </ul>
        <img
          src={data[0].flag}
          alt={data[0].name}
          width="130px"
          height="130px"
        />
      </div>
    )
  }
}

export default ShowCountry