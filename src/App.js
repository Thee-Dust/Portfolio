import React, { Component } from 'react';
import Navbar from './Navbar';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <header>
          <a href="/">Dustin Harbaugh</a>
        </header>
        <main>
          <Navbar />
        </main>
      </div>
    )
  }
}
