import ACTIONS from '../constants';

const goal = (state = 10, { type, payload }) =>
  type === ACTIONS.SET_GOAL ? parseInt(payload) : state;

const skiDay = (state = null, { type, payload }) =>
  type === ACTIONS.ADD_DAY ? payload : state;

const allSKiDays = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_DAY:
      const isSameDay = state.some(day => day.date === action.payload.date);
      return isSameDay
        ? state
        : [...state, skiDay(null, action)];
    default:
      return state;
  }
};

const error = (state = [], { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_ERROR:
      return [...state, payload];
    case ACTIONS.CLEAR_ERROR:
      return state.filter((_, i) => i !== payload);
    default:
      return state;
  }
};

export { goal, skiDay, allSKiDays, error };
