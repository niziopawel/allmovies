import React from 'react'
import { GenreProvider } from './GenreContext'

const AppProviders = ({ children }) => {
  return <GenreProvider>{children}</GenreProvider>
}

export default AppProviders
