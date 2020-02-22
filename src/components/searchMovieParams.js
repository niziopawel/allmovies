import React from 'react'
import Dropdown from './common/dropdown'
import './searchMovieParams.scss'
import { mapArrayToDropdownOptions } from '../utils/helpers'

const SearchMovieParams = ({ genres, onParamsChange, defaultParams }) => {
  const returnYearsArray = firstYearInRange => {
    const currentYear = new Date().getFullYear()
    const years = Array.from(
      Array(currentYear - firstYearInRange),
      (x, index) => currentYear - index
    )
    return ['None', ...years]
  }

  const sortingValues = [
    { id: 'popularity.desc', name: 'Popularity Descending' },
    { id: 'popularity.asc', name: 'Popularity Ascending' },
    { id: 'vote_average.desc', name: 'Rating descending' },
    { id: 'vote_average.asc', name: 'Rating ascending' },
    { id: 'release_date.desc', name: 'Release date descending' },
    { id: 'release_date.asc', name: 'Release date ascending' }
  ]
  const genresOptions = mapArrayToDropdownOptions(genres)
  const yearsOptions = mapArrayToDropdownOptions(returnYearsArray(1900))
  const sortingOptions = mapArrayToDropdownOptions(sortingValues)

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center' }}>Discover New Movies</h1>
      <div className="search-params">
        <Dropdown
          label="Year"
          name="year"
          placeholder="Year"
          options={yearsOptions}
          selection
          defaultOption={defaultParams.year}
          onSelectChange={onParamsChange}
        />
        <Dropdown
          label="Genres"
          name="genres"
          placeholder="Filter by genres..."
          options={genresOptions}
          selection
          defaultOption={defaultParams.genres}
          onSelectChange={onParamsChange}
          multiple
          search
        />
        <Dropdown
          label="Sort By"
          name="sortBy"
          options={sortingOptions}
          selection
          defaultOption={defaultParams.sortBy}
          onSelectChange={onParamsChange}
        />
      </div>
    </div>
  )
}

export default SearchMovieParams
