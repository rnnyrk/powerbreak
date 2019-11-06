import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import * as i from 'types';

import { logoutFromGoogle } from 'services/socialLogin';
import { Login, Faq } from 'screens/general';
import theme from 'styles/theme';
import { TextContent } from 'common/typography';

import MainNavigator from './MainNavigator';
const Stack = createStackNavigator<i.RootStackParams>();

const headerStyle = {
  headerStyle: {
    backgroundColor: theme.colors.blue.default,
  },
  headerTitleStyle: {
    color: theme.colors.white,
  },
};

const RootNavigator = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator
      initialRouteName="Login"
      mode="modal"
    >
      <Stack.Screen
        name="Login"
        component={Login}
        initialParams={{ resetAuthToken: false }}
        options={{
          ...headerStyle,
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Main"
        component={MainNavigator}
        options={() => ({
          ...headerStyle,
          headerShown: false,
          headerLeft: null,
          headerRight: () => (
            <TouchableOpacity onPress={logoutFromGoogle} style={{ paddingRight: 16 }}>
              <TextContent>Logout</TextContent>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="FaqModal"
        component={Faq}
        options={({ navigation }) => ({
          ...TransitionPresets.ModalPresentationIOS,
          headerLeft: null,
          headerTitle: 'FAQ',
          headerMode: 'screen',
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
