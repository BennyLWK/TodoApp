import {combineReducers} from 'redux';

import tabReducer from './tab/tabReducer';
import themeReducer from './theme/themeReducer';

export default combineReducers({
  tabReducer,
  themeReducer,
});
