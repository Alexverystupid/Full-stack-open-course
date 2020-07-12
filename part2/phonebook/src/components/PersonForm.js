import React, { useState } from 'react'

const PersonForm = ({
  persons,
  setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (persons.every(person => person.name !== newName)
      && persons.every(person => person.number !== newNumber))
      setPersons(persons.concat(personObject))
    else
      alert(`${newName} : ${newNumber} is already added to phonebook`)

    setNewName('')
    setNewNumber('')
  }

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div>
        number: <input
          value={newNumber}
          onChange={handleNumberChange}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm