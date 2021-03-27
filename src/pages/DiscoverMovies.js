import React, { useState } from 'react'
import MovieCard from '../components/movie-card'
import Spinner from '../components/spinner'
import FilterMovieParams from '../components/filter-movie-params'
import Pagination from '../components/pagination'
import { useGenres } from '../hooks/useGenres'
import { useMovies } from '../hooks/useMovies'
import { getMovieGenres } from '../services/genreService'

const DiscoverMovies = () => {
  const [activePage, setActivePage] = useState(1)
  const [filterParams, setFilterParams] = useState({
    sortBy: 'popularity.desc',
    year: null,
    genres: []
  })

  const queryString = `&sort_by=${filterParams.sortBy}${
    filterParams.year !== 'All'
      ? `&primary_release_year=${filterParams.year}`
      : ''
  }&page=${activePage}&vote_count.gte=1000${
    filterParams.genres.length
      ? `&with_genres=${filterParams.genres.join(',')}`
      : ''
  }`

  const genresInfo = useGenres()
  const moviesInfo = useMovies(queryString)

  function handleFilterParamsChange(param, value) {
    setFilterParams(searchParams => ({ ...searchParams, [param]: value }))
    setActivePage(1)
  }

  return (
    <div className="content">
      {genresInfo?.data?.length ? (
        <FilterMovieParams
          genres={genresInfo.data}
          defaultParams={filterParams}
          onParamsChange={handleFilterParamsChange}
        />
      ) : null}
      {moviesInfo.isLoading && <Spinner />}
      {moviesInfo.isError && <p>{moviesInfo.error}</p>}
      {moviesInfo.isSuccess && genresInfo.isSuccess ? (
        <React.Fragment>
          <div className="search-results">
            {moviesInfo?.data?.movies?.map(
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
                  key={id}
                  title={title}
                  posterUrl={poster_path}
                  date={release_date}
                  overview={overview}
                  rating={vote_average}
                  genres={getMovieGenres(genresInfo.data, genre_ids)}
                />
              )
            )}
          </div>
          <Pagination
            totalPages={moviesInfo.data.total_pages}
            onPageChange={page => setActivePage(page)}
            currentPage={activePage}
          />
        </React.Fragment>
      ) : null}
    </div>
  )
}

export default DiscoverMovies
