import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { logoutFromGoogle } from 'services/socialLogin';
import { Login } from 'screens/general';
import theme from 'styles/theme';
import { TextContent } from 'common/typography';

import MainNavigator from './MainNavigator';

const Stack = createStackNavigator<i.RootStackParamList>();

const headerStyle = {
  headerStyle: {
    backgroundColor: theme.colors.blue,
  },
  headerTitleStyle: {
    color: theme.colors.white,
  },
};

const headerOptions = {
  ...headerStyle,
  headerLeft: () => null,
  headerRight: () => (
    <TouchableOpacity onPress={logoutFromGoogle} style={{ paddingRight: 16 }}>
      <TextContent>Logout</TextContent>
    </TouchableOpacity>
  ),
};

const RootNavigator = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{ resetAuthToken: false }}
        options={headerStyle}
      />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={headerOptions}
      />
    </Stack.Navigator>
  </>
);

export default RootNavigator;
