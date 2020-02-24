import React from 'react'
import ArrowButton from './arrowButton'
import './card.scss'

const Card = ({ title, posterUrl, overview, date, rating, genreString }) => {
  const returnYearString = date => {
    if (date) {
      return date.substring(0, 4)
    }
    return 'Uknown'
  }

  return (
    <div className="card">
      <div className="card-left">
        {posterUrl ? (
          <img
            src={`https://image.tmdb.org/t/p/w185/${posterUrl}`}
            alt={`${title}'s poster`}
            className="card__img"
          />
        ) : (
          <i className="material-icons">movie</i>
        )}
      </div>
      <div className="card-right">
        <h1 className="card__title">
          <a href="/#" className="card__link">
            {title}
          </a>
          &nbsp;({returnYearString(date)})
        </h1>
        <div className="card__details">
          <div className="card__genres">
            Genre: <span>{genreString}</span>
          </div>
          <div className="card__rating">
            <i className="material-icons card__star-icon">grade</i>
            <span className="card__rate">{rating}</span>
          </div>
          <div className="card__overview">{overview}</div>
        </div>
        <ArrowButton>Read more</ArrowButton>
      </div>
    </div>
  )
}

export default Card
