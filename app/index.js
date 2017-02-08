import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import MovieIndex from './components/movieIndex';
import { Provider } from 'react-redux';
import UserContainer from './containers/UserContainer';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import store from './store';

const router = (
  <Provider store={store}>
    <Router history={browserHistory} >
      <Route path='/' component={App}>
        <IndexRoute component={MovieIndex} />
        <Route path='/login' component={UserContainer} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(router, document.getElementById('main'))
