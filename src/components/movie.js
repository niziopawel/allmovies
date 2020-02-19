import React, { useState, useEffect } from 'react'
import MovieCard from './movieCard'
import { getMovies } from '../services/movieService'
import './movie.scss'

const Movie = () => {
  const [movies, setMovie] = useState([])
  const params = `language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

  useEffect(() => {
    getMovies(params)
      .then(response => setMovie(response.data.results))
      .catch(err => console.log(err))
  }, [params])

  return (
    <div className="content">
      <div className="search-results">
        {movies &&
          movies.map(({ id, title, poster_path, overview, release_date }) => (
            <MovieCard
              key={id}
              title={title}
              posterUrl={poster_path}
              date={release_date}
              overview={overview}
            />
          ))}
      </div>
    </div>
  )
}

export default Movie
