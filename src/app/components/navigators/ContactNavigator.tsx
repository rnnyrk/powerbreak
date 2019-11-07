import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { Step1 } from 'screens/contact';
import theme from 'styles/theme';

const Stack = createStackNavigator<i.ContactStackParams>();

const headerStyle = {
  headerStyle: {
    backgroundColor: theme.colors.blue.default,
  },
  headerTitleStyle: {
    color: theme.colors.white.default,
  },
};

const ContactNavigator = () => (
  <Stack.Navigator
    initialRouteName="Step1"
    screenOptions={{
      ...headerStyle
    }}
  >
    <Stack.Screen
      name="Step1"
      component={Step1}
    />
  </Stack.Navigator>
);

export default ContactNavigator;
