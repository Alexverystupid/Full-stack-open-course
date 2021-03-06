import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const HasVote = ({ countVote, selected, setCountVote, setMostVote }) => {
  const handleClick = () => {
    const points = [...countVote]
    points[selected] += 1
    setCountVote(points)

    const max = points.indexOf(Math.max.apply(null, points))
    // console.log(max)
    setMostVote(max)
  }
  return (
    <button onClick={handleClick}>
      vote
    </button>
  )
}

const NextAnecdote = ({ selected, setSelected }) => {
  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * Math.floor(anecdotes.length))
    // console.log(randomNumber)
    if (randomNumber !== selected)
      setSelected(randomNumber)
    else
      handleClick()
  }

  return (
    <button onClick={handleClick}>
      next anecdote
    </button>
  )
}

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0)
  const [countVote, setCountVote] = useState(Array(anecdotes.length).fill(0))
  const [mostVote, setMostVote] = useState(0)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>

      <HasVote
        selected={selected}
        countVote={countVote}
        setCountVote={setCountVote}
        setMostVote={setMostVote}
      />

      <NextAnecdote
        selected={selected}
        setSelected={setSelected}
      />

      <p>has {countVote[selected]} votes</p>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostVote]}</p>
    </div >
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
