import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { BackButton } from 'common/interaction';
import { Overview, Detail } from 'screens/timeline';
import theme from 'styles/theme';

const Stack = createStackNavigator<i.PagesStackParams>();

const headerStyle = {
  headerStyle: {
    backgroundColor: theme.colors.blue.default,
  },
  headerTitleStyle: {
    color: theme.colors.white.default,
  },
};

const PagesNavigator = () => (
  <Stack.Navigator
    initialRouteName="Overview"
    screenOptions={{
      ...headerStyle,
    }}
  >
    <Stack.Screen
      name="Overview"
      component={Overview}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={({ navigation }) => ({
        headerLeft: () => (
          <BackButton onPress={() => navigation.goBack()} />
        ),
      })}
    />
  </Stack.Navigator>
);

export default PagesNavigator;
