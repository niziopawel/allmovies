import React from 'react'
import './movieCard.scss'

const MovieCard = ({ posterUrl, title, overview, date }) => {
  return (
    <div className="card">
      <div className="card__img-wrapper">
        <img
          className="card__img"
          src={`http://image.tmdb.org/t/p/w185/${posterUrl}`}
          alt={`${title}'s poster`}
        />
      </div>
      <div className="card__info">
        <div className="title-wrapper">
          <h1 className="card__title">{title}</h1>
          <span>{date}</span>
        </div>
        <div className="card__overview">{overview}</div>
        <p className="card__read-more">Read more...</p>
      </div>
    </div>
  )
}

export default MovieCard
