import React from 'react';
import Home from '../Home/Home';
import About from '../About/About';

export default function Main() {
  return (
    <main>
      <Home href='/'/>
      <About href='/about' />
    </main>
  )
}


