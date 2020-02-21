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
          <li className="header__nav-item">
            <a href="/#">Movies</a>
          </li>
          <li className="header__nav-item">
            <a href="/#">Favorite</a>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default Header
