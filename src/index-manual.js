import ACTIONS from './store/actionTypes';
import rootReducer from './store/reducers';
import initialState from './initialState.json';

let state = initialState;

console.log(`

  Initial State
  =============
  goal: ${state.goal}
  resorts: ${JSON.stringify(state.allSkiDays)}
  fetching: ${JSON.stringify(state.resortNames.fetching)}
  suggestions: ${JSON.stringify(state.resortNames.suggestions)}

`);

state = rootReducer(state, {
  type: ACTIONS.SET_GOAL,
  payload: 2,
});

state = rootReducer(state, {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavenly',
    date: '2016-12-10',
    powder: true,
    backcountry: false,
  },
});

state = rootReducer(state, {
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: ['Mt Tallac', 'Mt Hood', 'Mt Shasta'],
});

console.log(`

  Next State
  =============
  goal: ${state.goal}
  resorts: ${JSON.stringify(state.allSkiDays)}
  fetching: ${JSON.stringify(state.resortNames.fetching)}
  suggestions: ${JSON.stringify(state.resortNames.suggestions)}

`);
