import React from 'react'
import Card from '../Cards/card'

const MovieCard = ({
  id,
  posterUrl,
  title,
  overview,
  date,
  rating,
  genres
}) => {
  const formatOverview = overview => {
    if (overview.length > 150) {
      const index = overview.substring(0, 150).lastIndexOf(' ')
      return `${overview.substring(0, index)}...`
    }
    return overview
  }

  const formatGenres = genres => {
    return genres.join(', ')
  }

  return (
    <Card
      title={title}
      posterUrl={posterUrl}
      overview={formatOverview(overview)}
      rating={rating}
      date={date}
      genreString={formatGenres(genres)}
      navigatePath={`/movie/${id}`}
    />
  )
}

export default MovieCard
