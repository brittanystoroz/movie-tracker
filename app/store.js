import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import moviesReducer from './reducers/moviesReducer';

const initialState = {
  user: {
    id: null,
    name: null
  },
  movies: {
    recent: [],
    favorites: []
  }
};

export default createStore(
  combineReducers({
    user: userReducer,
    movies: moviesReducer
  }),
  initialState,
  applyMiddleware(thunk)
);