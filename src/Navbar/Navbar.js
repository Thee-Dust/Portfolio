import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Projects'>Projects</Link>
        <Link to='/Resume'>Resume</Link>
        <Link to='/Contact'>Contact Me</Link>
      </div>
    </nav>
  )
}


