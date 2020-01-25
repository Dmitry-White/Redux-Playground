import ACTIONS from '../constants';

const goal = (state = 10, { type, payload }) => {
  if (type === ACTIONS.SET_GOAL) {
    return parseInt(payload);
  } else {
    return state;
  }
};

const skiDay = (state = null, { type, payload }) => {
  if (type === ACTIONS.ADD_DAY) {
    return payload;
  } else {
    return state;
  }
};

export { goal, skiDay };
