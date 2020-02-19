import React from 'react'
import Card from './common/card'
import { useGenre } from '../context/genreContext'

const MovieCard = ({ posterUrl, title, overview, date, rating }) => {
  const cutOverview = () => {
    if (overview.length >= 200) {
      return `${overview.substring(0, 200)}...`
    }
    return overview
  }

  return (
    <Card
      title={title}
      posterUrl={posterUrl}
      overview={cutOverview()}
      rating={rating}
      date={date}
    />
  )
}

export default MovieCard
