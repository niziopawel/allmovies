import React from 'react'
import Header from './layout/header/Header'
import DiscoverMovies from './pages/DiscoverMovies'
import AppProviders from './context/AppProviders'

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppProviders>
        <DiscoverMovies />
      </AppProviders>
    </React.Fragment>
  )
}

export default App
