import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';

import {MainLayout} from '../screens';
import {COLORS, FONTS, SIZES, constants} from '../constants';
import {
  searchByCompletedStatus,
  setSearchKeyword,
} from '../redux/task/taskSlice';
import {toggleTheme, selectTheme} from '../redux/theme/themeSlice';

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({label, isFocused, onPress}) => {
  const appTheme = useSelector(selectTheme);

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        height: 40,
        marginBottom: SIZES.base,
        alignItems: 'center',
        borderRadius: SIZES.base,
        backgroundColor: isFocused
          ? appTheme.bottomTabBarBackgroundColor
          : null,
      }}
      onPress={onPress}>
      <Text
        style={{
          marginLeft: 15,
          color: isFocused ? appTheme.textColor : COLORS.gray,
          ...FONTS.body3,
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const CustomDrawerContent = ({navigation, selectedTab, setSelectedTab}) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.tasks);

  const onSearchTask = keyword => {
    dispatch(
      setSearchKeyword({
        search: keyword,
      }),
    );
    dispatch(
      searchByCompletedStatus({
        completed: keyword,
      }),
    );
  };

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
            isFocused={typeof todos.searchKeyword !== 'boolean'}
            label={constants.todoStatus.all}
            onPress={() => {
              navigation.closeDrawer();
              onSearchTask(null);
            }}
          />
          <CustomDrawerItem
            isFocused={todos.searchKeyword === true}
            label={constants.todoStatus.completed}
            onPress={() => {
              navigation.closeDrawer();
              onSearchTask(true);
            }}
          />
          <CustomDrawerItem
            isFocused={todos.searchKeyword === false}
            label={constants.todoStatus.active}
            onPress={() => {
              navigation.closeDrawer();
              onSearchTask(false);
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
