import React from 'react'
import Header from './common/header'
import Movies from './movies'
import './app.scss'
import AppProviders from '../context/AppProviders'

function App() {
  return (
    <React.Fragment>
      <Header />
      <AppProviders>
        <Movies />
      </AppProviders>
    </React.Fragment>
  )
}

export default App
