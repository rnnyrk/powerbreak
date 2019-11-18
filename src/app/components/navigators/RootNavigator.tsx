import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as i from 'types';

import { Login, Faq } from 'screens/general';
import { TextContent } from 'common/typography';

import MainNavigator from './MainNavigator';
import theme from 'styles/theme';
const Stack = createStackNavigator<i.RootStackParams>();

const RootNavigator = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator
      initialRouteName="Main"
      mode="modal"
    >
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{ resetAuthToken: false }}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="FaqModal"
        component={Faq}
        options={({ navigation }) => ({
          ...TransitionPresets.ModalPresentationIOS,
          headerTitle: 'FAQ',
          headerTitleStyle: {
            color: theme.colors.white.default,
          },
          headerStyle: {
            backgroundColor: theme.colors.blue.default
          },
          headerLeft: () => null,
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingRight: 16 }}>
              <TextContent variant="blue">Close</TextContent>
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  </>
);

export default RootNavigator;
