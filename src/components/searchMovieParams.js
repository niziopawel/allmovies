import React, { useState } from 'react'
import { useGenre } from '../context/genreContext'
import useDropdown from '../hooks/useDropdown'

const SearchParams = () => {
  const returnYearsArray = () => {
    const currentYear = new Date().getFullYear()
    const firstPossibleYear = 1900
    const years = Array.from(
      Array(currentYear - firstPossibleYear),
      (x, index) => currentYear - index
    )
    return years
  }

  const genres = useGenre()
  console.log(genres)
  const [year, YearDropdown, setYear] = useDropdown(
    'Year',
    returnYearsArray(),
    false,
    true,
    true
  )
  return (
    <div className="search-params">
      <h1 style={{ textAlign: 'center' }}>Search params</h1>
      <YearDropdown />
    </div>
  )
}

export default SearchParams
