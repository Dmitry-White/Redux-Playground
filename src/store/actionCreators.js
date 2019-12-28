import ACTIONS from './actionTypes';

const setGoal = (goal) => ({
  type: ACTIONS.SET_GOAL,
  payload: goal,
});

const addDay = (
  resort = 'US',
  date = '2016-01-01',
  powder = false,
  backcountry = false,
) => ({
  type: ACTIONS.ADD_DAY,
  payload: {
    resort,
    date,
    powder,
    backcountry,
  },
});

const changeSuggestions = (suggestions = []) => ({
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: suggestions,
});

export { setGoal, addDay, changeSuggestions };
