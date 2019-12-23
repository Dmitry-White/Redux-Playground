import storeFactory from './store';
import ACTIONS from './constants';

const store = storeFactory();

store.dispatch({
  type: ACTIONS.SET_GOAL,
  payload: 2,
});

store.dispatch({
  type: ACTIONS.ADD_DAY,
  payload: {
    resort: 'Heavenly',
    date: '2016-12-10',
    powder: true,
    backcountry: false,
  },
});

store.dispatch({
  type: ACTIONS.CHANGE_SUGGESTIONS,
  payload: ['Mt Tallac', 'Mt Hood', 'Mt Shasta'],
});
