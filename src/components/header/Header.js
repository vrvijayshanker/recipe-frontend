import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <div>
      <div className='header'>
        <div className='logo-box'>
            <h1>🍳 tasty 🍹</h1>
        </div>
        
        <div className='link-box'>
            <ul className='nav-items'>
                <Link to={'/'}><li>All</li></Link>
                <Link to={'/american'}><li>American</li></Link>
                <Link to={'/chinese'}><li>Chinese</li></Link>
                <Link to={'/indian'}><li>Indian</li></Link>
                <Link to={'/italian'}><li>Italian</li></Link>
                <Link to={'/addrecipe'}><li><i>Add a Recipe</i></li></Link>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
