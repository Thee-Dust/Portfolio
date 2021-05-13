import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
      <a href="/">Dustin Harbaugh</a>
      <nav>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/projects'>Projects</a>
      </nav>
    </div>
  )
}
