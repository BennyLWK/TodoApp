import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constants} from '../constants';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, isFocused, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        borderRadius: SIZES.base,
        backgroundColor: isFocused ? COLORS.lightBlue : null,
      }}
      onPress={onPress}>
      <Text
        style={{
          marginLeft: 15,
          color: COLORS.gray4,
          ...FONTS.body3,
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
            label={constants.todoStatus.all}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
          <CustomDrawerItem
            label={constants.todoStatus.completed}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
          <CustomDrawerItem
            label={constants.todoStatus.active}
            onPress={() => {
              navigation.closeDrawer();
            }}
          />
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = ({}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          overlayColor: COLORS.transparentBlack6, //'transparent',
          drawerStyle: {
            width: '40%',
          },
          drawerType: 'slide',
        }}
        initialRouteName="MainLayout"
        drawerContent={props => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}>
        <Drawer.Screen name="MainLayout">
          {props => <MainLayout {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
