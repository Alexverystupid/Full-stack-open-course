import React from 'react'

const Note = ({ notes }) => {

  return (
    notes.map(note =>
      <li key={note.id}>
        {note.content}
      </li>
    )
  )
}

export default Note