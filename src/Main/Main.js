import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {

    }
  }


  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path='/About'>
            <About />
          </Route>
        </Switch>
      </main>
    )
  }
}
