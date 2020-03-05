import React from 'react'
import './arrowButton.scss'

const ArrowButton = ({ children, onClick }) => {
  const handleClick = e => {
    e.preventDefault()
    onClick()
  }

  return (
    <button className="btn" onClick={e => handleClick(e)}>
      <div className="btn__circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </div>
      <div className="btn__label">{children}</div>
    </button>
  )
}

export default ArrowButton
