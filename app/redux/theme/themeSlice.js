import {createSlice} from '@reduxjs/toolkit';

import {blueTheme, greenTheme, orangeTheme, purpleTheme} from '../../constants';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    appTheme: blueTheme,
  },
  // JSON.parse(localStorage.getItem('theme')) ||
  reducers: {
    toggleTheme: (state, action) => {
      switch (action.payload) {
        case 'blue':
          state.appTheme = blueTheme;
          break;
        case 'purple':
          state.appTheme = purpleTheme;
          break;
        case 'green':
          state.appTheme = greenTheme;
          break;
        case 'orange':
          state.appTheme = orangeTheme;
          break;
        default:
          break;
      }
      // localStorage.setItem('theme', JSON.stringify(state.appTheme));
    },
  },
});

export const {toggleTheme} = themeSlice.actions;
export const selectTheme = state => state.theme.appTheme;
export default themeSlice.reducer;
