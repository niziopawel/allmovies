import { client } from './httpService'

function getMovieById(id, parameters) {
  const response = client(`movie/${id}`, parameters)
  return response
}

function getMovies(params) {
  const response = client(`discover/movie`, null, params)
  return response
}

function getMovieCredits(id) {
  const response = client(`movie/${id}/credits`)
  return response
}

export { getMovieById, getMovies, getMovieCredits }
