import React, { useState, useEffect } from 'react'
import Spinner from '../common/Spinner/spinner'
import { getMovieById, getMovieCredits } from '../../services/movieService'
import './movieDetails.scss'

const MovieDetails = ({ movieID }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [movie, setMovie] = useState({})
  const [cast, setCast] = useState([])

  useEffect(() => {
    setLoading(true)
    getMovieById(movieID)
      .then(({ status, data }) => {
        if (status === 200) {
          setMovie(data)
          getMovieCredits(movieID).then(({ data }) => {
            setCast(data.cast)
            setLoading(false)
          })
        }
      })
      .catch(err => setError(err))
  }, [movieID])

  return (
    <div className="container">
      {error && <h1>{error}</h1>}
      {loading && <Spinner />}
      {Object.keys(movie).length && (
        <div className="content">
          <h1>{movie.title}</h1>
          {Object.keys(cast).length && <h2>{cast[0].character}</h2>}
        </div>
      )}
    </div>
  )
}

export default MovieDetails
