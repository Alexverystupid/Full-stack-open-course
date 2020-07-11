import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Header = ({ title }) => {
  return (
    <h1>
      {title}
    </h1>
  )
}

const Content = ({ parts }) => {
  const course = (part) => (
    <p>
      {part.name} {part.exercises}
    </p>
  )

  return (
    parts.map(part => (
      course(part)
    ))
  )
}

const Total = ({ parts }) => {
  const count = parts.map(part => part.exercises)

  return (
    <p>
      {count.reduce((agg, cur) =>
        agg + cur, 0)}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
