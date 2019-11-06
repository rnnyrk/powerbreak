import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeArea } from 'react-native-safe-area-context';

import theme from 'styles/theme';
import { isXModel } from 'services/deviceInfo';
import { Bolt } from 'common/svg';
import { Dashboard } from 'screens/general';

import ContactNavigator from './ContactNavigator';
import PagesNavigator from './PagesNavigator';
const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  const insets = useSafeArea();

  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: theme.colors.white,
        inactiveTintColor: theme.colors.purple.light,
        style: {
          height: isXModel() ? 100 : 55,
          paddingTop: 8,
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
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Bolt width={20} height={24} fill={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Pages"
        component={PagesNavigator}
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Bolt width={20} height={24} fill={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Contact"
        component={ContactNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Bolt width={20} height={24} fill={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MainNavigator;
