import React, { useState, useEffect, createContext, useContext } from 'react'
import * as genreService from '../services/genreService'
import Spinner from '../components/spinner'
const GenreContext = createContext()

const GenreProvider = props => {
  const [genres, setGenres] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    genreService
      .getGenres()
      .then(({ data }) => {
        setGenres(data.genres)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
      })
  }, [])
  if (error) return <p>{error}</p>

  if (loading) return <Spinner />

  return <GenreContext.Provider value={{ genres }} {...props} />
}
const useGenre = () => {
  const context = useContext(GenreContext)
  return context
}

export { useGenre, GenreProvider }
