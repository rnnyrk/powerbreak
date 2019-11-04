import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeArea } from 'react-native-safe-area-context';

import theme from 'styles/theme';
import { Dashboard, Overview } from 'screens/general';
import { Bolt } from 'common/svg';

const Tab = createBottomTabNavigator();

const RootNavigator = () => {
  const insets = useSafeArea();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: theme.colors.white,
        inactiveTintColor: theme.colors.purple.light,
        style: {
          height: 110,
          paddingTop: 16,
          paddingBottom: insets.bottom,
          backgroundColor: theme.colors.purple.dark,
        },
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          lineHeight: 20,
          fontFamily: theme.fonts.regular,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Bolt width={24} height={35} fill={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Overview"
        component={Overview}
        options={{
          tabBarIcon: ({ color }) => (
            <Bolt width={24} height={35} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
