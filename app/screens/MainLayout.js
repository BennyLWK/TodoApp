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
            backgroundColor: isFocused ? selectedColor : COLORS.white,
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
              color: COLORS.black,
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

const MainLayout = ({navigation, selectedTab, setSelectedTab}) => {
  const flatListRef = React.useRef();

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
          backgroundColor: COLORS.primary,
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
            isFocused={selectedTab == constants.colorTheme.blue}
            onPress={() => {
              setSelectedTab(constants.colorTheme.blue);
            }}
            innerContainerStyle={{backgroundColor: COLORS.blue}}
            selectedColor={COLORS.lightBlue}
          />

          <TabButton
            label={constants.colorTheme.purple}
            labelStyle={{color: COLORS.purple}}
            isFocused={selectedTab == constants.colorTheme.purple}
            onPress={() => {
              setSelectedTab(constants.colorTheme.purple);
            }}
            innerContainerStyle={{backgroundColor: COLORS.purple}}
            selectedColor={COLORS.lightPurple}
          />

          <TabButton
            label={constants.colorTheme.green}
            labelStyle={{color: COLORS.green}}
            isFocused={selectedTab == constants.colorTheme.green}
            onPress={() => {
              setSelectedTab(constants.colorTheme.green);
            }}
            innerContainerStyle={{backgroundColor: COLORS.green}}
            selectedColor={COLORS.lightGreen}
          />

          <TabButton
            label={constants.colorTheme.orange}
            labelStyle={{color: COLORS.orange}}
            isFocused={selectedTab == constants.colorTheme.orange}
            onPress={() => {
              setSelectedTab(constants.colorTheme.orange);
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: selectedTab => {
      return dispatch(setSelectedTab(selectedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);
