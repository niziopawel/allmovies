import React from 'react'
import Button from './button'
import './card.scss'

const Card = ({ title, posterUrl, overview, date, rating, genreString }) => {
  const year = date.substring(0, 4)
  return (
    <div className="card">
      <div className="card-left">
        <img
          src={`http://image.tmdb.org/t/p/w185/${posterUrl}`}
          alt={`${title}'s poster`}
          className="card__img"
        />
      </div>
      <div className="card-right">
        <h1 className="card__title">
          <a href="/#" className="card__link">
            {title}
          </a>
        </h1>
        <div className="card__details">
          <ul>
            <li>{year}</li>
            <li>
              Genre: <span>{genreString}</span>
            </li>
          </ul>
          <div className="card__rating">
            <i className="material-icons card__star-icon">grade</i>
            <span className="card__rate">{rating}</span>
          </div>
          <div className="card__overview">{overview}</div>
        </div>
        <Button href="/#" className="card__read-more">
          Read more
        </Button>
      </div>
    </div>
  )
}

export default Card
