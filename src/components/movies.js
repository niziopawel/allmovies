import React, { useState, useEffect } from 'react'
import MovieCard from './movieCard'
import Spinner from './common/spinner'
import SearchMovieParams from './searchMovieParams'
import { getGenres, getMovieGenres } from '../services/genreService'
import { getMovies } from '../services/movieService'
import './movies.scss'

const Movie = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchParams, setSearchParams] = useState({
    year: 2018,
    genres: [],
    sortBy: 'popularity.desc'
  })

  const queryString = `language=en-US&sort_by=${searchParams.sortBy}&page=1&year=${searchParams.year}`

  useEffect(() => {
    const abortController = new AbortController()
    getGenres()
      .then(response => {
        setGenres(response.data.genres)
      })
      .catch(err => {
        setError(err)
      })

    return function cancel() {
      abortController.abort()
    }
  }, [])

  useEffect(() => {
    setLoading(true)
    getMovies(queryString).then(response => {
      setMovies(response.data.results)
      setLoading(false)
    })
  }, [queryString])

  const handleParamsChange = (param, value) => {
    setSearchParams(searchParams => ({ ...searchParams, [param]: value }))
  }

  return (
    <div className="content">
      {genres.length && (
        <SearchMovieParams
          genres={genres}
          defaultParams={searchParams}
          onParamsChange={handleParamsChange}
        />
      )}
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
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default Movie
