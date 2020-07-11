import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
  const [value, setValue] = useState(10)

  const handleClick = () => {
    setValue(0)
  }
  return (
    <div>
      {value}
      <button onClick={handleClick}>
        reset to zero
      </button>
      <button onClick={console.log('clicked the button')}>
        button
      </button>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
