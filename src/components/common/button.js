import React from 'react'
import './button.scss'
const Buttton = ({ onClick, type, children }) => {
  return (
    <button className={`btn ${type ? type : ''}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Buttton
