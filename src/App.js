import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './layout/header'
import DiscoverMovies from './pages/DiscoverMovies'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <DiscoverMovies />
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
