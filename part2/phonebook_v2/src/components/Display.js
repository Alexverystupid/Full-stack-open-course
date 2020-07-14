import React from 'react'
import getPersons from '../services/getPersons'

const Display = ({ persons }) => {
  const handleClick = (person) => {
    if (window.confirm(`Delete ${person.name} ?`))
      getPersons
        .deletePerson(person.id)
  }

  return (
    persons.map(person =>
      <div key={person.id}>
        {person.name} {person.number}

        <button onClick={() => handleClick(person)}>
          delete
        </button>
      </div>
    )
  )
}

export default Display