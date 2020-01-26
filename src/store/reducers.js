import { combineReducers } from 'redux';

import ACTIONS from '../constants';

const goal = (state = 10, { type, payload }) =>
  type === ACTIONS.SET_GOAL ? parseInt(payload) : state;

const skiDay = (state = null, { type, payload }) =>
  type === ACTIONS.ADD_DAY ? payload : state;

const allSkiDays = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_DAY:
      const isSameDay = state.some((day) => day.date === action.payload.date);
      return isSameDay ? state : [...state, skiDay(null, action)];
    case ACTIONS.REMOVE_DAY:
      return state.filter((day) => day.date !== action.payload);
    default:
      return state;
  }
};

const errors = (state = [], { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_ERROR:
      return [...state, payload];
    case ACTIONS.CLEAR_ERROR:
      return state.filter((_, i) => i !== payload);
    default:
      return state;
  }
};

const fetching = (state = false, { type }) => {
  switch (type) {
    case ACTIONS.FETCH_RESORT_NAMES:
      return true;
    case ACTIONS.CANCEL_FETCHING:
      return false;
    case ACTIONS.CHANGE_SUGGESTIONS:
      return false;
    default:
      return state;
  }
};

const suggestions = (state = [], { type, payload }) => {
  switch (type) {
    case ACTIONS.CLEAR_SUGGESTIONS:
      return [];
    case ACTIONS.CHANGE_SUGGESTIONS:
      return payload;
    default:
      return state;
  }
};

const resortNames = combineReducers({
  fetching,
  suggestions,
});

const rootReducer = combineReducers({
  allSkiDays,
  goal,
  errors,
  resortNames,
});

export { goal, skiDay, allSkiDays, errors, fetching, suggestions };
export default rootReducer;
