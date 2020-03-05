import React, { useState, useEffect } from 'react'
import MovieCard from '../common/MovieCard/movieCard'
import Spinner from '../common/Spinner/spinner'
import SearchMovieParams from '../common/SearchParams/searchMovieParams'
import Pagination from '../common/Pagination/pagination'
import { getGenres, getMovieGenres } from '../../services/genreService'
import { getMovies } from '../../services/movieService'
import './movies.scss'

const Movie = () => {
  const [movies, setMovies] = useState([])
  const [genres, setGenres] = useState([])
  const [totalPages, setTotalPages] = useState('')
  const [activePage, setActivePage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchParams, setSearchParams] = useState({
    year: 2018,
    genres: [],
    sortBy: 'popularity.desc'
  })

  const queryString = `&sort_by=${searchParams.sortBy}${
    searchParams.year !== 'All'
      ? `&primary_release_year=${searchParams.year}`
      : ''
  }&page=${activePage}&vote_count.gte=1000${
    searchParams.genres.length
      ? `&with_genres=${searchParams.genres.join(',')}`
      : ''
  }`

  useEffect(() => {
    getGenres()
      .then(response => {
        setGenres(response.data.genres)
      })
      .catch(err => {
        setError(err)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    getMovies(queryString).then(response => {
      setMovies(response.data.results)
      setTotalPages(response.data.total_pages)
      setLoading(false)
    })
  }, [queryString])

  const handleParamsChange = (param, value) => {
    setSearchParams(searchParams => ({ ...searchParams, [param]: value }))
    setActivePage(1)
  }

  const handlePageChange = page => {
    setActivePage(page)
    window.scrollTo(0, 0)
  }

  return (
    <div className="container">
      <div className="content">
        {loading && <Spinner />}
        {error && <p>{error}</p>}
        {genres.length && movies.length ? (
          <React.Fragment>
            <SearchMovieParams
              genres={genres}
              defaultParams={searchParams}
              onParamsChange={handleParamsChange}
            />
            <div className="search-results">
              {movies.map(
                ({
                  id,
                  title,
                  poster_path,
                  overview,
                  release_date,
                  vote_average,
                  genre_ids
                }) => (
                  <MovieCard
                    id={id}
                    key={id}
                    title={title}
                    posterUrl={poster_path}
                    date={release_date}
                    overview={overview}
                    rating={vote_average}
                    genres={getMovieGenres(genres, genre_ids)}
                  />
                )
              )}
            </div>
            <Pagination
              totalPages={totalPages}
              onPageChange={handlePageChange}
              currentPage={activePage}
            />
          </React.Fragment>
        ) : null}
      </div>
    </div>
  )
}

export default Movie
