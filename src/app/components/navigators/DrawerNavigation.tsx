import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import theme from 'styles/theme';
import { Profile } from 'screens/general';

import MainNavigator from './MainNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Profile"
    drawerStyle={{
      backgroundColor: theme.colors.purple.light,
      width: 240,
    }}
    drawerContentOptions={{
      activeTintColor: theme.colors.purple.default,
      itemStyle: { marginVertical: 0 },
    }}
  >
    <Drawer.Screen name="Main" component={MainNavigator} />
    <Drawer.Screen name="Profile" component={Profile} />
  </Drawer.Navigator>
);

export default DrawerNavigation;