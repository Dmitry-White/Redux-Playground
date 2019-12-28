import storeFactory from './store';
import { setGoal, addDay, changeSuggestions } from './store/actionCreators';

const store = storeFactory();

store.dispatch(setGoal(2));

store.dispatch(addDay('Heavenly', '2016-12-10', true));

store.dispatch(changeSuggestions(['Mt Tallac', 'Mt Hood', 'Mt Shasta']));
