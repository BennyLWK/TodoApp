import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#0095FF',
  orange: '#FF8400',
  lightOrange: '#FFDFBC',
  green: '#64BC00',
  lightGreen: '#E5FFC8',
  blue: '#0095FF',
  lightBlue: '#D7EEFF',
  purple: '#9000FF',
  lightPurple: '#EED9FF',
  darkBlue: '#111A2C',
  gray: '#AEAEAE',
  red: '#FF5656',
  black: '#000000',
  white: '#FFFFFF',

  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack6: 'rgba(0, 0, 0, 0.6)',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};
export const FONTS = {
  largeTitle: {fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle},
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Regular', fontSize: SIZES.body5, lineHeight: 22},
};

export const blueTheme = {
  name: 'blue',
  backgroundColor: COLORS.blue,
  textColor: COLORS.blue,
  tabBackgroundColor: COLORS.blue,
  cardBackgroundColor: COLORS.blue,
  bottomTabBarBackgroundColor: COLORS.lightBlue,
  headerColor: COLORS.blue,
  iconColor: COLORS.blue,
};

export const purpleTheme = {
  name: 'purple',
  backgroundColor: COLORS.purple,
  textColor: COLORS.purple,
  tabBackgroundColor: COLORS.purple,
  cardBackgroundColor: COLORS.purple,
  bottomTabBarBackgroundColor: COLORS.lightPurple,
  headerColor: COLORS.purple,
  iconColor: COLORS.purple,
};

export const greenTheme = {
  name: 'green',
  backgroundColor: COLORS.green,
  textColor: COLORS.green,
  tabBackgroundColor: COLORS.green,
  cardBackgroundColor: COLORS.green,
  bottomTabBarBackgroundColor: COLORS.lightGreen,
  headerColor: COLORS.green,
  iconColor: COLORS.green,
};

export const orangeTheme = {
  name: 'orange',
  backgroundColor: COLORS.orange,
  textColor: COLORS.orange,
  tabBackgroundColor: COLORS.orange,
  cardBackgroundColor: COLORS.orange,
  bottomTabBarBackgroundColor: COLORS.lightOrange,
  headerColor: COLORS.orange,
  iconColor: COLORS.orange,
};

export const selectedTheme = blueTheme;
