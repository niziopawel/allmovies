import React from 'react'
import Header from '../common/Header/header'
import Movies from '../DiscoverMovie/movies'
import './app.scss'
import AppProviders from '../../context/AppProviders'

function App() {
  return (
    <div>
      <Header />
      <AppProviders>
        <Movies />
      </AppProviders>
    </div>
  )
}

export default App
