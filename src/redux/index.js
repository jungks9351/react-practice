import { combineReducers } from 'redux';
import countReducer from './counter';
import postReducer from './post';

const reducer = combineReducers({
  countReducer,
  postReducer,
});

export default reducer;
