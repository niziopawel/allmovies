import { client } from './httpService'

function getGenres() {
  return client(`genre/movie/list`, null, null)
    .then(res => res.data.genres)
    .catch(error => error.message)
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
