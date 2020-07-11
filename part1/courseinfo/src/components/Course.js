import React from 'react'

const Note = ({ part }) => {
  return (
    <li>
      {part.name} {part.exercises}
    </li>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((acc, cur) => {
    // console.log('what happened', gcc, cur.exercises)
    return acc + cur.exercises
  }, 0)

  return (
    <strong>total of {total} exercises</strong>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <h2>{course.name}</h2>
      <ul>
        {course.parts.map(part =>
          <Note key={part.id} part={part} />
        )}
      </ul>
      <Total parts={course.parts} />
    </div>
  )
}

export default Course