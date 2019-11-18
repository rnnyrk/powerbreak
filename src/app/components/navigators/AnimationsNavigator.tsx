import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { Index } from 'screens/animations';
import theme from 'styles/theme';

const Stack = createStackNavigator<i.AnimationsStackParams>();

const headerStyle = {
  headerStyle: {
    backgroundColor: theme.colors.blue.default,
  },
  headerTitleStyle: {
    color: theme.colors.white.default,
  },
};

const AnimationsNavigator = () => (
  <Stack.Navigator
    initialRouteName="Index"
    screenOptions={{
      ...headerStyle
    }}
  >
    <Stack.Screen
      name="Index"
      component={Index}
      options={() => ({
        headerTitle: 'Animations',
      })}
    />
  </Stack.Navigator>
);

export default AnimationsNavigator;
