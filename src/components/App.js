import React, { Component } from 'react';
import Movie from './Movie.jsx';
import Home from './Home.jsx';
import Signup from './Signup';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/movie/:id'} component={Movie} />
          <Route path={'/signup'} component={Signup} />
          <Route path={'/'} component={Home} />
          <Route path='*' render={() => <h3>This page does not exist</h3>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
