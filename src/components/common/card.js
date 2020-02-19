import React from 'react'
import './card.scss'

const Card = ({ title, posterUrl, overview, date, rating }) => {
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
            <li>111 min</li>
            <li>Genre</li>
          </ul>
          <div className="card__rating">
            <i className="material-icons card__star-icon">grade</i>
            <span className="card__rate">{rating}</span>
          </div>
          <div className="card__overview">{overview}</div>
        </div>
        <span className="card__read-more">
          <a href="/#">Read More...</a>
        </span>
      </div>
    </div>
  )
}

export default Card
