import ACTIONS from './constants';
import { goal, skiDay } from './store/reducers';

const setGoalState = 10;
const skiDayState = null;

const setGoalAction = {
  type: ACTIONS.SET_GOAL,
  payload: 15,
};
const skiDayAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavanly',
    data: '2016-12-16',
    powder: true,
    backcountry: false,
  },
};

const nextSetGoalState = goal(setGoalState, setGoalAction);
const nextSkiDayState = skiDay(skiDayState, skiDayAction);

console.log(`
  initial goal: ${skiDayState}
  set goal action: ${JSON.stringify(setGoalAction)}
  ski day action: ${JSON.stringify(skiDayAction)}
  new goal: ${nextSetGoalState}
  new day: ${JSON.stringify(nextSkiDayState)}
`);
