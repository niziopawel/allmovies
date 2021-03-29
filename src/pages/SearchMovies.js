import React, { useState } from 'react'
import MovieCard from '../components/movie-card'
import Spinner from '../components/spinner'
import Pagination from '../components/pagination'
import { useGenres } from '../hooks/useGenres'
import { useMovies } from '../hooks/useMovies'

const SearchMovies = () => {
  const [activePage, setActivePage] = useState(1)
  const [filterParams, setFilterParams] = useState({
    sortBy: 'popularity.desc',
    year: null,
    genres: []
  })

  const queryString = `&sort_by=${filterParams.sortBy}${
    filterParams.year !== 'All'
      ? `&primary_release_year=${filterParams.year}`
      : ''
  }&page=${activePage}&vote_count.gte=1000${
    filterParams.genres.length
      ? `&with_genres=${filterParams.genres.join(',')}`
      : ''
  }`

  const genresInfo = useGenres()
  const moviesInfo = useMovies(queryString)

  return (
    <div className="content-wrapper">
      <h3 className="page-title">Search Movies</h3>
      <div className="content">
        <div className="filter"></div>
        <div>
          <div className="movies-list">
            {moviesInfo.isSuccess
              ? moviesInfo.data.movies.map(movie => (
                  <MovieCard
                    key={movie.id}
                    title={movie.title}
                    overview={movie.overview}
                    posterPath={movie.poster_path}
                  />
                ))
              : null}
          </div>
          <Pagination
            totalPages={moviesInfo?.data?.total_pages}
            currentPage={activePage}
            onPageChange={setActivePage}
          />
        </div>
      </div>
    </div>
  )
}

export default SearchMovies
