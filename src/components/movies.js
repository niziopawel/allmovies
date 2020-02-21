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
  const params = `language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

  useEffect(() => {
    setLoading(true)
    Promise.all([getMovies(params), getGenres()])
      .then(response => {
        setMovies(response[0].data.results)
        setGenres(response[1].data.genres)
        setLoading(false)
      })
      .catch(err => setError(err))
  }, [params])
  return (
    <div className="content">
      <SearchMovieParams />
      {loading && <Spinner />}
      {error && <p>{error}</p>}
      <div className="search-results">
        {genres.length > 0 && movies.length > 0
          ? movies.map(
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
            )
          : null}
      </div>
    </div>
  )
}

export default Movie
