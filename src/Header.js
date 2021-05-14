import React, { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';


import './Header.css';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  }

  return (
    <header>
      <a href="/">Dustin Harbaugh</a>
      <nav className="navBar">
        <div>
          <Hamburger onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</Hamburger>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/projects'>Projects</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}


