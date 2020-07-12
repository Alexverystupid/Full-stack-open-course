import React from 'react'

const Filter = ({ filterName, setFilterName }) => {
  const handleFilter = (e) => {
    setFilterName(e.target.value)
  }

  return (
    <div>
      filter shown with <input
        value={filterName}
        onChange={handleFilter}
      />
    </div>
  )
}

export default Filter