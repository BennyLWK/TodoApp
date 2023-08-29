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
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from 'react-native-reanimated';
// import LinearGradient from 'react-native-linear-gradient';
import {useDrawerProgress} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import {setSelectedTab} from '../stores/tab/tabActions';
import {toggleTheme} from '../stores/theme/themeActions';

import {Home} from '../screens';
import {Header} from '../components';
import {
  COLORS,
  FONTS,
  SIZES,
  icons,
  constants,
  dummyData,
  theme,
} from '../constants';
import appTheme from '../constants/theme';

const MainLayout = ({
  navigation,
  selectedTab,
  setSelectedTab,
  appTheme,
  toggleTheme,
}) => {
  const flatListRef = React.useRef();
  const TabButton = ({
    label,
    labelStyle,
    selectedColor,
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
      toggleTheme('blue');
    } else if (color == 'purple') {
      toggleTheme('purple');
    } else if (color == 'green') {
      toggleTheme('green');
    } else if (color == 'orange') {
      toggleTheme('orange');
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
          height: 50,
          paddingHorizontal: SIZES.radius,
          marginTop: 40,
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
            selectedColor={COLORS.lightBlue}
          />

          <TabButton
            label={constants.colorTheme.purple}
            labelStyle={{color: COLORS.purple}}
            isFocused={appTheme.name == 'purple'}
            onPress={() => {
              toggleThemeHandler('purple');
            }}
            innerContainerStyle={{backgroundColor: COLORS.purple}}
            selectedColor={COLORS.lightPurple}
          />

          <TabButton
            label={constants.colorTheme.green}
            labelStyle={{color: COLORS.green}}
            isFocused={appTheme.name == 'green'}
            onPress={() => {
              toggleThemeHandler('green');
            }}
            innerContainerStyle={{backgroundColor: COLORS.green}}
            selectedColor={COLORS.lightGreen}
          />

          <TabButton
            label={constants.colorTheme.orange}
            labelStyle={{color: COLORS.orange}}
            isFocused={appTheme.name == 'orange'}
            onPress={() => {
              toggleThemeHandler('orange');
            }}
            innerContainerStyle={{backgroundColor: COLORS.orange}}
            selectedColor={COLORS.lightOrange}
          />
        </View>
      </View>
    </View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
    appTheme: state.themeReducer.appTheme,
    error: state.themeReducer.error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
    toggleTheme: themeType => {
      return dispatch(toggleTheme(themeType));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
