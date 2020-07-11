import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistic = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? '0%' : `${(good / all) * 100}%`

  return (
    <table>
      <tbody>
        <tr>
          <td>good: {good}</td>
          <td>neutral: {neutral}</td>
          <td>bad: {bad}</td>
          <td>all: {all}</td>
          <td>average: {average}</td >
          <td>positive: {positive}</td >
        </tr>
      </tbody >
    </table >
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h2>give feedback</h2>
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <h3>statistics</h3>
      <Statistic
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)