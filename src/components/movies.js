import React, { useState, useEffect } from 'react'
import MovieCard from './movieCard'
import Spinner from './common/spinner'
import SearchMovieParams from './searchMovieParams'
import Pagination from './common/pagination'
import { getGenres, getMovieGenres } from '../services/genreService'
import { getMovies } from '../services/movieService'
import './movies.scss'

const Movie = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchParams, setSearchParams] = useState({
    year: 2018,
    genres: [],
    sortBy: 'popularity.desc'
  })

  const queryString = `&sort_by=${searchParams.sortBy}${
    searchParams.year !== 'All'
      ? `&primary_release_year=${searchParams.year}`
      : ''
  }&page=${activePage}&vote_count.gte=1000${
    searchParams.genres.length
      ? `&with_genres=${searchParams.genres.join(',')}`
      : ''
  }`

  useEffect(() => {
    getGenres()
      .then(response => {
        setGenres(response.data.genres)
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    getMovies(queryString).then(response => {
      setMovies(response.data.results)
      setTotalPages(response.data.total_pages)
      setLoading(false)
    })
  }, [queryString])

  const handleParamsChange = (param, value) => {
    setSearchParams(searchParams => ({ ...searchParams, [param]: value }))
    setActivePage(1)
  }

  const handlePageChange = page => {
    setActivePage(page)
  }

  return (
    <div className="content">
      {genres.length ? (
        <SearchMovieParams
          genres={genres}
          defaultParams={searchParams}
          onParamsChange={handleParamsChange}
        />
      ) : null}
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      {genres.length && movies.length ? (
        <React.Fragment>
          <div className="search-results">
            {movies.map(
              ({
                id,
                title,
                poster_path,
                overview,
                release_date,
                vote_average,
                genre_ids
              }) => (
                <MovieCard
                  key={id}
                  title={title}
                  posterUrl={poster_path}
                  date={release_date}
                  overview={overview}
                  rating={vote_average}
                  genres={getMovieGenres(genres, genre_ids)}
                />
              )
            )}
          </div>
          <Pagination
            totalPages={totalPages}
            onPageChange={handlePageChange}
            currentPage={activePage}
          />
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default Movie
