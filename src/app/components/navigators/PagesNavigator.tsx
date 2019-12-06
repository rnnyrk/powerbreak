import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import * as i from 'types';

import { TextContent } from 'common/typography';
import { Overview, Detail } from 'screens/pages';
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
          <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 16 }}>
            <TextContent>Terug</TextContent>
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);

export default PagesNavigator;
