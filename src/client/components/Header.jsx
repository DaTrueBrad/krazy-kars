import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to="/"><h2 id='site-title'>Krazy Kars</h2></Link>
      <Link to={'/kars/create'}><button id='add-button'>+</button></Link>
    </header>
  )
}

export default Header