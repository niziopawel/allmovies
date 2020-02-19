import React, { useState, useEffect, createContext, useContext } from 'react'
import * as genreService from '../services/genreService'

const GenreContext = createContext()

const GenreProvider = props => {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    genreService.getGenres().then(({ data }) => setGenres(data))
  }, [])
  return <GenreContext.Provider value={{ genres }} {...props} />
}
const useGenre = () => {
  const context = useContext(GenreContext)
  return context
}

export { useGenre, GenreProvider }
