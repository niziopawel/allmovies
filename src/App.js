import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import Header from './layout/Header'
import Wrapper from './layout/Wrapper'
import Main from './layout/Main'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App
