import React from 'react'
import { GenreProvider } from './genreContext'

const AppProviders = ({ children }) => {
  return <GenreProvider>{children}</GenreProvider>
}

export default AppProviders
