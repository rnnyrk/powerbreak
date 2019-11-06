import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { Overview, Detail } from 'screens/general';

const Stack = createStackNavigator<i.PagesStackParams>();

const PagesNavigator = () => (
  <Stack.Navigator initialRouteName="Overview" headerMode="none">
    <Stack.Screen
      name="Overview"
      component={Overview}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
    />
  </Stack.Navigator>
);

export default PagesNavigator;
