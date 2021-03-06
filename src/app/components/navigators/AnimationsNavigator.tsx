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
  PanGesture,
} from 'screens/animations';
import { BackButton } from 'common/interaction';
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
    screenOptions={({ navigation }) => ({
      ...headerStyle,
      headerLeft: () => (
        <BackButton onPress={() => navigation.goBack()} />
      ),
    })}
  >
    <Stack.Screen
      name="Index"
      component={Index}
      options={{
        headerLeft: () => null,
        headerTitle: 'Animations overview',
      }}
    />
    <Stack.Screen
      name="Success"
      component={Success}
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
    <Stack.Screen
      name="Timing"
      component={Timing}
    />
    <Stack.Screen
      name="PanGesture"
      component={PanGesture}
    />
  </Stack.Navigator>
);

export default AnimationsNavigator;
