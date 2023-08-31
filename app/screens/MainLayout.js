import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
  Platform,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {Header} from '../components';
import {COLORS, FONTS, SIZES, icons, constants} from '../constants';
import {toggleTheme, selectTheme} from '../stores/theme/themeSlice';
const MainLayout = ({navigation}) => {
  const flatListRef = React.useRef();
  const appTheme = useSelector(selectTheme);
  const dispatch = useDispatch();

  const TabButton = ({
    label,
    labelStyle,
    isFocused,
    outerContainerStyle,
    innerContainerStyle,
    onPress,
  }) => {
    return (
      <TouchableWithoutFeedback onPress={onPress}>
        <View
          style={[
            {
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isFocused
                ? appTheme.bottomTabBarBackgroundColor
                : COLORS.white,
            },
            outerContainerStyle,
          ]}>
          <View
            style={[
              {
                flexDirection: 'row',
                width: 24,
                height: 24,
                alignItems: 'center',
                justifyContent: 'center',
              },
              innerContainerStyle,
            ]}></View>
          <Text
            numberOfLines={1}
            style={[
              {
                marginTop: SIZES.base,
                color: appTheme.textColor,
                ...FONTS.h3,
              },
              labelStyle,
            ]}>
            {label}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  function toggleThemeHandler(color) {
    if (color == 'blue') {
      dispatch(toggleTheme('blue'));
    } else if (color == 'purple') {
      dispatch(toggleTheme('purple'));
    } else if (color == 'green') {
      dispatch(toggleTheme('green'));
    } else if (color == 'orange') {
      dispatch(toggleTheme('orange'));
    }
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        overflow: 'hidden',
      }}>
      {/* Header */}
      <Header
        containerStyle={{
          height: Platform.OS == 'ios' ? 90 : 50,
          paddingHorizontal: SIZES.radius,
          paddingTop: Platform.OS == 'ios' ? 40 : 0,
          alignItems: 'center',
          backgroundColor: appTheme.backgroundColor,
        }}
        title={'TODO'}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => navigation.openDrawer()}>
            <Image source={icons.menu} tintColor={COLORS.white} />
          </TouchableOpacity>
        }
      />

      {/* Content */}
      <View
        style={{
          flex: 1,
        }}></View>

      {/* Footer */}
      <View
        style={{
          height: 100,
          justifyContent: 'flex-end',
        }}>
        {/* Tabs */}
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            paddingBottom: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: COLORS.white,
          }}>
          <TabButton
            label={constants.colorTheme.blue}
            labelStyle={{color: COLORS.blue}}
            isFocused={appTheme.name == 'blue'}
            onPress={() => {
              toggleThemeHandler('blue');
            }}
            innerContainerStyle={{backgroundColor: COLORS.blue}}
          />

          <TabButton
            label={constants.colorTheme.purple}
            labelStyle={{color: COLORS.purple}}
            isFocused={appTheme.name == 'purple'}
            onPress={() => {
              toggleThemeHandler('purple');
            }}
            innerContainerStyle={{backgroundColor: COLORS.purple}}
          />

          <TabButton
            label={constants.colorTheme.green}
            labelStyle={{color: COLORS.green}}
            isFocused={appTheme.name == 'green'}
            onPress={() => {
              toggleThemeHandler('green');
            }}
            innerContainerStyle={{backgroundColor: COLORS.green}}
          />

          <TabButton
            label={constants.colorTheme.orange}
            labelStyle={{color: COLORS.orange}}
            isFocused={appTheme.name == 'orange'}
            onPress={() => {
              toggleThemeHandler('orange');
            }}
            innerContainerStyle={{backgroundColor: COLORS.orange}}
          />
        </View>
      </View>
    </View>
  );
};

export default MainLayout;
