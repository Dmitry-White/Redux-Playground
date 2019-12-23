import { createStore } from 'redux';

import ACTIONS from './constants';
import rootReducer from './store/reducers';
import initialState from './initialState.json';

// By default, the store will be initialized
// with all the default state variables passed to reducers.
// If you pass your own initial state to createStore function,
// the store will be initialized with the passed state.
const store = createStore(rootReducer, initialState);

// eslint-disable-next-line
console.log(`

  Initial State
  =============
  goal: ${store.getState().goal}
  resorts: ${JSON.stringify(store.getState().allSkiDays)}
  fetching: ${JSON.stringify(store.getState().resortNames.fetching)}
  suggestions: ${JSON.stringify(store.getState().resortNames.suggestions)}

`);

store.dispatch({
  type: ACTIONS.SET_GOAL,
  payload: 2,
});

store.dispatch({
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavenly',
    date: '2016-12-10',
    powder: true,
    backcountry: false,
  },
});

store.dispatch({
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: ['Mt Tallac', 'Mt Hood', 'Mt Shasta'],
});

// eslint-disable-next-line
console.log(`

  Next State
  =============
  goal: ${store.getState().goal}
  resorts: ${JSON.stringify(store.getState().allSkiDays)}
  fetching: ${JSON.stringify(store.getState().resortNames.fetching)}
  suggestions: ${JSON.stringify(store.getState().resortNames.suggestions)}

`);
