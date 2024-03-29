import React from 'react';
import {View, Text} from 'react-native';
import {COLORS, FONTS} from '../constants';

const Header = ({
  containerStyle,
  title,
  titleStyle,
  leftComponent,
  rightComponent,
}) => {
  return (
    <View
      style={{
        height: 60,
        flexDirection: 'row',
        ...containerStyle,
      }}>
      {leftComponent}
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{...FONTS.h1, color: COLORS.white, ...titleStyle}}>
          {title}
        </Text>
      </View>
      {rightComponent}
    </View>
  );
};

export default Header;
