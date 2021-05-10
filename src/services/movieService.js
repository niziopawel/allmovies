import { client } from './httpService'

function getMovieById(id, parameters) {
  const response = client(`movie/${id}`, parameters)
  return response
}

function getMovies(queryString) {
  return client(`discover/movie`, null, queryString)
    .then(res => {
      return {
        movies: res.data.results,
        totalPages: res.data.total_pages
      }
    })
    .catch(err => err.message)
}

function getMovieCredits(id) {
  const response = client(`movie/${id}/credits`)
  return response
}

export { getMovieById, getMovies, getMovieCredits }
