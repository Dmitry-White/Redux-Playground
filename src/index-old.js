import ACTIONS from './constants';
import {
  goal,
  skiDay,
  allSkiDays,
  errors,
  fetching,
  suggestions,
} from './store/reducers';

const setGoalState = 10;
const skiDayState = null;
const allSkiDaysState = [
  {
    resort: 'Kirkwood',
    date: '2016-12-16',
    powder: true,
    backcountry: false,
  },
  {
    resort: 'Mt Tallac',
    date: '2016-12-9',
    powder: false,
    backcountry: true,
  },
];
const errorsState = ['user not authorized', 'server feed not found'];
const noFetchingState = false;
const fetchingState = true;
const suggestionsState = ['Squaw Valley', 'Snowbird', 'Stowe', 'Steamboat'];
const emptySuggestionsState = {
  fetching: true,
  suggestions: [],
};

const setGoalAction = {
  type: ACTIONS.SET_GOAL,
  payload: 15,
};
const skiDayAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavenly',
    date: '2016-12-7',
    powder: true,
    backcountry: false,
  },
};
const addSKiDaysAction = {
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Squaw Valley',
    date: '2016-12-14',
    powder: false,
    backcountry: false,
  },
};
const removeSkiDaysAction = {
  type: ACTIONS.REMOVE_DAY,
  payload: '2016-12-9',
};
const addErrorAction = {
  type: ACTIONS.ADD_ERROR,
  payload: "can't connect to server",
};
const removeErrorAction = {
  type: ACTIONS.CLEAR_ERROR,
  payload: 0,
};
const fetchAction = {
  type: ACTIONS.FETCH_RESORT_NAMES,
};
const cancelFetchingAction = {
  type: ACTIONS.CANCEL_FETCHING,
};
const clearSuggestionsAction = {
  type: ACTIONS.CLEAR_SUGGESTIONS,
};
const changedSuggestionsAction = {
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: ['Heavenly Ski Resort', 'Heavens Sonohara'],
};

const nextSetGoalState = goal(setGoalState, setGoalAction);
const nextSkiDayState = skiDay(skiDayState, skiDayAction);
const addAllSKiDaysState = allSkiDays(allSkiDaysState, addSKiDaysAction);
const removeAllSKiDaysState = allSkiDays(allSkiDaysState, removeSkiDaysAction);
const newErrorState = errors(errorsState, addErrorAction);
const removedErrorState = errors(errorsState, removeErrorAction);
const isFetchingState = fetching(noFetchingState, fetchAction);
const notFetchingState = fetching(fetchingState, cancelFetchingAction);
const clearedSuggestionsState = suggestions(
  suggestionsState,
  clearSuggestionsAction,
);
const changedSuggestionsState = {
  fetching: fetching(fetchingState, changedSuggestionsAction),
  suggestions: suggestions(emptySuggestionsState, changedSuggestionsAction),
};

console.log(`
  set goal action: ${JSON.stringify(setGoalAction)}
  ski day action: ${JSON.stringify(skiDayAction)}
  add ski days action: ${JSON.stringify(addSKiDaysAction)}
  remove ski days action: ${JSON.stringify(removeSkiDaysAction)}
  add errors action: ${JSON.stringify(addErrorAction)}
  remove errors action: ${JSON.stringify(removeErrorAction)}
  fetching action: ${JSON.stringify(fetchAction)}
  cancel fetching action: ${JSON.stringify(cancelFetchingAction)}
  clear suggestions action: ${JSON.stringify(clearSuggestionsAction)}
  change suggestions action: ${JSON.stringify(changedSuggestionsAction)}

  new goal: ${nextSetGoalState}
  new day: ${JSON.stringify(nextSkiDayState)}
  add days: ${JSON.stringify(addAllSKiDaysState)}
  remove days: ${JSON.stringify(removeAllSKiDaysState)}
  new errors: ${JSON.stringify(newErrorState)}
  removed errors: ${JSON.stringify(removedErrorState)}
  is fetching: ${isFetchingState}
  not fetching: ${notFetchingState}
  cleared suggestions: ${JSON.stringify(clearedSuggestionsState)}
  changed suggestions: ${JSON.stringify(changedSuggestionsState)}
`);
