import { client } from './httpService'

function getGenres() {
  const response = client(`genre/movie/list`, null, null)
  return response
}

export { getGenres }
