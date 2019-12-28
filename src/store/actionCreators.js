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

const removeDay = (date) => ({
  type: ACTIONS.REMOVE_DAY,
  payload: date,
});

const changeSuggestions = (suggestions = []) => ({
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: suggestions,
});

const clearSuggestions = () => ({
  type: ACTIONS.CLEAR_SUGGESTIONS,
});

const addError = (error) => ({
  type: ACTIONS.ADD_ERROR,
  payload: error,
});

const clearError = (index) => ({
  type: ACTIONS.CLEAR_ERROR,
  payload: index,
});

export {
  setGoal,
  addDay,
  removeDay,
  changeSuggestions,
  clearSuggestions,
  addError,
  clearError,
};
