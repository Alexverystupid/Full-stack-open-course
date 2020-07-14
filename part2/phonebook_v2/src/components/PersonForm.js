import React, { useState } from 'react'
import getPersons from '../services/getPersons'

const PerosnForm = ({ persons, setPersons }) => {
  const [newNumber, setNewNumber] = useState('')
  const [newName, setNewName] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPersons = (e) => {
    e.preventDefault()

    if (persons.some(person => person.name === newName)) {
      // const url = `http://localhost:3001/persons/${updateName.id}`
      const updateName = persons.find(person => person.name === newName)
      const changedPerson = { ...updateName, number: newNumber }

      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)) {
        // console.log(changedPerson)
        getPersons
          .update(updateName.id, changedPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id !== updateName.id ? person : returnedPerson))
          })
      }
    } else {
      const newObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }

      getPersons
        .create(newObject)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))

    }

    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={addPersons}>
      <div>
        name: <input
          value={newName}
          onChange={(handleNameChange)}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={(handleNumberChange)}
        />
      </div>

      <button type='submit'>add</button>
    </form>
  )
}

export default PerosnForm