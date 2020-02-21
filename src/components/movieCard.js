import React from 'react'
import Card from './common/card'

const MovieCard = ({ posterUrl, title, overview, date, rating, genres }) => {
  const formatOverview = overview => {
    if (overview.length > 200) {
      const index = overview.substring(0, 200).lastIndexOf(' ')
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
    />
  )
}

export default MovieCard
