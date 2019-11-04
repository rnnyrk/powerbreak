import React from 'react';
import { StatusBar, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { logoutFromGoogle } from 'services/socialLogin';
import { Login } from 'screens/general';

import MainNavigator from './MainNavigator';

const Stack = createStackNavigator<i.RootStackParamList>();

const headerOptions = {
  headerLeft: () => null,
  headerRight: () => (
    <TouchableOpacity onPress={logoutFromGoogle}>
      <Text>Logout</Text>
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
