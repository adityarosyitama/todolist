import {combineReducers} from 'redux';
import taskReducers from './taskReducers';

const rootReducer = combineReducers({
  task: taskReducers,
});

export default rootReducer;
