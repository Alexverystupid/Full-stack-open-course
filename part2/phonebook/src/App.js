import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('')

  const filteredPerson = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        //console.log(response.data)
        setPersons(response.data)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter
        filterName={filterName}
        setFilterName={setFilterName}
      />

      <h3>add a new</h3>

      <PersonForm
        persons={persons}
        setPersons={setPersons}
      />

      <h3>Numbers</h3>

      <Persons
        persons={filteredPerson}
      />
    </div>
  )
}

export default App;
