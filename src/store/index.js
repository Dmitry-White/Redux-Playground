import { createStore, applyMiddleware } from 'redux';

import { consoleMessages } from './middlewares';
import rootReducer from './reducers';
import initialState from './initialState.json';

// By default, the store will be initialized
// with all the default state variables passed to reducers.
// If you pass your own initial state to createStore function,
// the store will be initialized with the passed state.
const storeFactory = () =>
  applyMiddleware(consoleMessages)(createStore)(rootReducer, initialState);

export default storeFactory;
