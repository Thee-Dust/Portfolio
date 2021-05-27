import React from 'react'
import './Navbar.css';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <nav>
      <div className='links'>
        <Link to='home' smooth={true} duration={1000}>Home</Link>
        <Link to='about' smooth={true} duration={1000}>About</Link>
        <Link to='projects' smooth={true} duration={1000}>Projects</Link>
        <Link to='resume' smooth={true} duration={1000}>Resume</Link>
        <Link to='contact' smooth={true} duration={1000}>Contact Me</Link>
      </div>
    </nav>
  )
}


