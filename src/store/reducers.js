import ACTIONS from '../constants';

const goal = (state = 10, { type, payload }) =>
  type === ACTIONS.SET_GOAL
    ? parseInt(payload)
    : state;

const skiDay = (state = null, { type, payload }) =>
  type === ACTIONS.ADD_DAY
    ? payload
    : state;

export { goal, skiDay };
