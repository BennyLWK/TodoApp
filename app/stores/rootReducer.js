// import {combineReducers} from 'redux';

// import tabReducer from './tab/tabReducer';
// import themeReducer from './theme/themeReducer';

// export default combineReducers({
//   tabReducer,
//   themeReducer,
// });

import {configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme/themeSlice';

export default configureStore({
  reducer: {
    theme: themeReducer,
  },
});
