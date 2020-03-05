import React from 'react'
import ArrowButton from '../Buttons/arrowButton'
import { navigate } from '@reach/router'
import './card.scss'
import { Link } from '@reach/router'

const Card = ({
  title,
  posterUrl,
  overview,
  date,
  rating,
  genreString,
  navigatePath
}) => {
  const returnYearString = date => {
    if (date) {
      return date.substring(0, 4)
    }
    return 'Uknown'
  }

  const handleClick = () => {
    navigate(navigatePath)
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
          <Link to={navigatePath} className="card__link">
            {title}
          </Link>
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
        <ArrowButton onClick={handleClick}>Read more</ArrowButton>
      </div>
    </div>
  )
}

export default Card
