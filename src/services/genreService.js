import { client } from './httpService'

function getGenres() {
  const response = client(`genre/movie/list`, null, null)
  return response
}

function getMovieGenres(genres, genreIds) {
  let movieGenres = []
  if (genreIds) {
    genreIds.forEach(id => {
      genres.forEach(elem => {
        if (elem.id === id) {
          movieGenres.push(elem.name)
        }
      })
    })
    return movieGenres
  }
}

export { getGenres, getMovieGenres }
