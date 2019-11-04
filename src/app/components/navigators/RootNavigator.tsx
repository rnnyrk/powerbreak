import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from 'screens/general';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </>
);

export default RootNavigator;
