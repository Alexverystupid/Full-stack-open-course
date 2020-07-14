import React, { useState, useEffect } from 'react'
import getPersons from './services/getPersons'
import Display from './components/Display'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filterName, setFilterName] = useState('')

  const filterPersons = persons.filter(person =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  )

  useEffect(() => {
    getPersons
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [persons])

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

      <Display
        persons={filterPersons}
      />
    </div >
  )
}

export default App