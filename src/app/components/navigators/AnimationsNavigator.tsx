import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import {
  Index,
  Success,
  Timing,
  TransitioningForm,
  Transitions,
  UseTransitions,
} from 'screens/animations';
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
      ...headerStyle,
    }}
  >
    <Stack.Screen
      name="Index"
      component={Index}
      options={{
        headerTitle: 'Animations overview',
      }}
    />
    <Stack.Screen
      name="Success"
      component={Success}
    />
    <Stack.Screen
      name="Timing"
      component={Timing}
    />
    <Stack.Screen
      name="TransitioningForm"
      component={TransitioningForm}
    />
    <Stack.Screen
      name="Transitions"
      component={Transitions}
    />
    <Stack.Screen
      name="UseTransitions"
      component={UseTransitions}
    />
  </Stack.Navigator>
);

export default AnimationsNavigator;
