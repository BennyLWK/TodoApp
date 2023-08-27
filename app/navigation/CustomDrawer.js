import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  useDrawerProgress,
} from '@react-navigation/drawer';
// import Animated from 'react-native-reanimated';
// import {connect} from 'react-redux';
// import {setSelectedTab} from '../stores/tab/tabActions';

import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constants, icons, dummyData} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, icon, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        paddingLeft: SIZES.radius,
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.lightBlue : null,
      }}
      onPress={onPress}>
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.gray4,
          ...FONTS.h3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{
        flex: 1,
        // backgroundColor: COLORS.primary,
      }}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radius,
        }}>
        <View
          style={{
            marginLeft: SIZES.radius,
          }}>
          <Text style={{color: COLORS.black, ...FONTS.body1}}>TODO</Text>
        </View>

        {/* Drawer Items */}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.height > 800 ? SIZES.padding : SIZES.radius,
          }}>
          <CustomDrawerItem
            label={'所有事项'}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
          <CustomDrawerItem
            label={'已完成事项'}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
          <CustomDrawerItem
            label={'未完成事项'}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({selectedTab, setSelectedTab}) => {
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        // useLegacyImplementation
        //
        screenOptions={{
          headerShown: false,
          overlayColor: 'transparent',
          drawerStyle: {
            width: '60%',
          },
          drawerType: 'slide',
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          return (
            <CustomDrawerContent
              navigation={props.navigation}
              //   selectedTab={selectedTab}
              //   setSelectedTab={setSelectedTab}
            />
          );
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
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

// export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
export default CustomDrawer;
