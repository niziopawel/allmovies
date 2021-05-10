import { useQuery } from 'react-query'
import { getMovies } from '../services/movieService'

function useMovies(queryString) {
  return useQuery(['movies', queryString], () => getMovies(queryString), {
    refetchOnWindowFocus: false
  })
}

export { useMovies }
