import React from 'react'
import Card from '../card'
import { formatMovieOverview } from './utils/helpers'

const MovieCard = ({ posterPath, title, overview }) => {
  const formattedOverview = formatMovieOverview(overview)

  return (
    <Card className="movie-card">
      <Card.Image
        src={`https://themoviedb.org/t/p/w220_and_h330_face${posterPath}`}
        alt="Poster"
        className="poster"
      />
      <Card.Content>
        <Card.Title>
          <a href="/">{title}</a>
        </Card.Title>
        <Card.Description>{formattedOverview}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default MovieCard
