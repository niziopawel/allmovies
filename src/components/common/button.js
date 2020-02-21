import React from 'react'
import './button.scss'
const Buttton = ({ type, children }) => {
  return (
    <a className={`btn ${type ? type : ''}`} href="/#">
      {children}
    </a>
  )
}

export default Buttton
