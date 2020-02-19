import React from 'react'
import './header.scss'

const Header = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header__logo-box">
          All<span>Movies</span>
        </div>
        <ul className="header__nav">
          <li className="header__nav-item">Movies</li>
          <li className="header__nav-item">Series</li>
        </ul>
      </header>
    </div>
  )
}

export default Header
