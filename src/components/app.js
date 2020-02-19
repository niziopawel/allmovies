import React from 'react'
import Header from './common/header'
import Movies from './movies'
import './app.scss'
import AppProviders from '../context/AppProviders'

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
