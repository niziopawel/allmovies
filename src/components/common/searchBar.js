import React from 'react'
import './searchBar.scss'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <input
        className="search-bar__input"
        type="text"
        name="query"
        placeholder="Szukaj filmów..."
        value={value}
        onChange={e => onChange(e.currentTarget.value)}
      ></input>
    </div>
  )
}

export default SearchBar
