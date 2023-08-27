import {blueTheme, greenTheme, orangeTheme, purpleThem} from '../../constants';

export const TOGGLE_THEME_BEGIN = 'TOGGLE_THEME_BEGIN';
export const TOGGLE_THEME_SUCCESS = 'TOGGLE_THEME_SUCCESS';
export const TOGGLE_THEME_FAILURE = 'TOGGLE_THEME_FAILURE';

export const toggleThemeBegin = selectedTheme => ({
  type: TOGGLE_THEME_BEGIN,
});

export const toggleThemeSuccess = selectedTheme => ({
  type: TOGGLE_THEME_SUCCESS,
  payload: {selectedTheme},
});

export const toggleThemeFailure = error => ({
  type: TOGGLE_THEME_FAILURE,
  payload: {error},
});

export function toggleTheme(themeType) {
  return dispatch => {
    dispatch(toggleThemeBegin());

    switch (themeType) {
      case 'blue':
        dispatch(toggleThemeSuccess(blueTheme));
        break;
      case 'purple':
        dispatch(toggleThemeSuccess(purpleThem));
        break;
      case 'green':
        dispatch(toggleThemeSuccess(greenTheme));
        break;
      case 'orange':
        dispatch(toggleThemeSuccess(orangeTheme));
        break;
      default:
        dispatch(toggleThemeFailure({error: 'Invalid theme type'}));
        break;
    }
  };
}
