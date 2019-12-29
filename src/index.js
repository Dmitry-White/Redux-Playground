import storeFactory from './store';
import {
  setGoal,
  addDay,
  changeSuggestions,
  clearSuggestions,
  addError,
  clearError,
  randomGoal,
} from './store/actionCreators';

const store = storeFactory();

store.dispatch(setGoal(2));

store.dispatch(addDay('Heavenly', '2016-12-10', true));

store.dispatch(changeSuggestions(['Mt Tallac', 'Mt Hood', 'Mt Shasta']));

store.dispatch(clearSuggestions());

store.dispatch(changeSuggestions(['Heavenly Ski Resort', 'Heavens Sonohara']));

store.dispatch(addError("Can't connect to server"));

store.dispatch(clearError(0));

store.dispatch(addError("Can't connect to server again"));

store.dispatch(randomGoal());
