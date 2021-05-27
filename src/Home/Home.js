import React from 'react'
import './Home.css';
import headshot from '../assets/headshot.jpeg'

export default function Home() {
  return (
    <div className='home'>
      <h1>Hey, I'm Dustin Harbaugh</h1>
      <h1>You can call me The Dust!</h1>
      <h3>and I'm a Front-End Web Developer</h3>
      <img src={headshot} alt="headshot of Dustin" className="headshot"/>
    </div>
  )
}
