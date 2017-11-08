import React, { Component } from 'react';
import Movie from './Movie.jsx';
import Home from './Home.jsx';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path={'/movie/:id'} component={Movie} />
          <Route path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
