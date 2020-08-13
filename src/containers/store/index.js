import { combineReducers } from 'redux';

import counter from './reducers/CounterReducer';

export default combineReducers({
    counter,
});