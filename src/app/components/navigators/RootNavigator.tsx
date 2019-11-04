import React from 'react';
import { StatusBar } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { Loading } from 'screens/general';
import MainNavigator from './MainNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="Main" component={MainNavigator} />
    </Stack.Navigator>
  </>
);

export default RootNavigator;
