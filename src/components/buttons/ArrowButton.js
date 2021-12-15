import React from 'react'

const ArrowButton = ({ children }) => {
  return (
    <button className="btn">
      <div className="btn__circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </div>
      <div className="btn__text">{children}</div>
    </button>
  )
}

export default ArrowButton
