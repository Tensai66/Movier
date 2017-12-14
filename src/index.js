import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createHistory from 'history/createBrowserHistory';


import AppContainer from './containers/App-container';
import MoviePage from './components/App/MovieDirectory/MoviePage.js';

import { Route, Switch } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';


const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
window.appStore = store; //In case you want to see what's inside by executing appStore in console;

const history = createHistory()

const middleware = routerMiddleware(history)

const store = createStore(rootReducer, devTools, applyMiddleware(middleware));



ReactDOM.render(
  <Provider store={ store }>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/movies/:id' component={MoviePage} />
        <Route path='/' component={AppContainer} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main')
)
