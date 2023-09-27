import {combineReducers} from 'redux';
import authReducer from './authReducers';
import loginReducers from './authReducers';
import detailItemReducers from './detailItemReducers';
import searchHistReducers from './searchHistReducers';

const rootReducer = combineReducers({
  login: loginReducers,
  detailItem: detailItemReducers,
  searchHist:searchHistReducers,
});

export default rootReducer;
