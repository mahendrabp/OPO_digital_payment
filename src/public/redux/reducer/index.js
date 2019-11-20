import {combineReducers} from 'redux';

// import all reducers
import user from './user';

// combine them
const appReducer = combineReducers({
  // auth,
  user, // es6 shorthand from notes: notes
});

export default appReducer;
