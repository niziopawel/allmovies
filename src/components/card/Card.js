import React from 'react'

function Card({ className, children, ...restProps }) {
  return (
    <div className={`card ${className ? className : ''}`} {...restProps}>
      {children}
    </div>
  )
}

Card.Content = function CardContent({ children }) {
  return <div className="card__content">{children}</div>
}

Card.Image = function CardImage({ className, src, alt, ...restProps }) {
  return (
    <div className={`card__image ${className ? className : ''}`}>
      <img src={src} alt={alt} {...restProps} />
    </div>
  )
}

Card.Title = function CardTitle({ children }) {
  return <h5 className="card__title">{children}</h5>
}

Card.Description = function CardDescription({ children }) {
  return <p className="card__description">{children}</p>
}

export default Card
