import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className="header-container">
        <h1 className="header-text">
            Gavin O'Connor
        </h1>
    </div>
    <div className="links-container">
        <div className="link-container">
            <a href="/">
                Home
            </a>
        </div>
        <div className="link-container">
            <a href="/#/projects">
                Projects
            </a>
        </div>
    </div>
    </>
  )
}

export default Header