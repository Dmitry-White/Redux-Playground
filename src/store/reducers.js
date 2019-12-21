import ACTIONS from '../constants';

const goal = (state = 10, action) => {
  if (action.type === ACTIONS.SET_GOAL) {
    return parseInt(action.payload);
  } else {
    return state;
  }
};

export { goal };
