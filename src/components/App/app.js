import React from 'react'
import { Router, Redirect } from '@reach/router'
import AppProviders from '../../context/AppProviders'
import Header from '../common/Header/header'
import Movies from '../DiscoverMovie/movies'
import MovieDetails from '../MovieDetails/movieDetails'
import NotFound from '../common/NotFound/notFound'
import './app.scss'

function App() {
  return (
    <div>
      <Header />
      <AppProviders>
        <Router>
          <Redirect from="/" to="/movies" noThrow />
          <Movies path="/movies" />
          <MovieDetails path="/movie/:movieID" />
          <NotFound default />
        </Router>
      </AppProviders>
    </div>
  )
}

export default App
