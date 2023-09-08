import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './task/taskSlice';
import themeReducer from './theme/themeSlice';

export default configureStore({
  reducer: {
    tasks: taskReducer,
    theme: themeReducer,
  },
});
