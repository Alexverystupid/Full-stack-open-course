import React from 'react'

const Filter = ({ filterName, setFilterName }) => {
  const handleNameChanged = (e) => {
    setFilterName(e.target.value)
  }

  return (
    <div>
      filter shown with <input
        value={filterName}
        onChange={handleNameChanged}
      />
    </div>
  )
}

export default Filter