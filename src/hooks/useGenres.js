import { useQuery } from 'react-query'
import { getGenres } from '../services/genreService'

function useGenres() {
  return useQuery('genres', () => getGenres(), {
    refetchOnWindowFocus: false
  })
}

export { useGenres }
