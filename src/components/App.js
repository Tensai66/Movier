import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { setCurrentUser } from '../actions/login.js';
import setAuthorizationToken from '../api/setAuth';

import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import jwt from 'jsonwebtoken';
import { Provider } from 'react-redux';
import rootReducer from '../reducers/rootReducer.js';

import Movie from './Movie.jsx';
import Home from './Home.jsx';
import Signup from './Signup.jsx';
import Login from './Login.jsx';

import '../css/App.css';

const store = createStore( // Make global store
  rootReducer,
  compose(
    applyMiddleware(thunk), // Apply promise middleware
    window.devToolsExtension ? window.devToolsExtension() : f => f // Allow chrome extension
  )
)

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken)
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={'/movie/:id'} component={Movie} />
            <Route path={'/signup'} component={Signup} />
            <Route path={'/login'} component={Login} />
            <Route path={'/'} component={Home} />
            <Route path='*' render={() => <h3>This page does not exist</h3>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
