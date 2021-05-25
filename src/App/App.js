import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <Navbar />
      </div>
    )
  }
}
