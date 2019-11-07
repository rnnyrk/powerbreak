import React, { useEffect, useState, useRef } from 'react';
import { Linking, Alert } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationNativeContainer, useLinking } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { setContainer } from 'services/navigationService';

import { store } from './store';

const App: React.FC = () => {
  enableScreens();

  const navigationRef = useRef();

  const { getInitialState } = useLinking(navigationRef, {
    prefixes: ['https://powerbreak.nl', 'powerbreak://'],
    config: {
      Detail: {
        path: 'page/:id',
        parse: {
          id: Number,
        },
      },
    },
  });

  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    getInitialState()
      .catch((error) => console.error('error getInitialState', error))
      .then((state) => {
        console.log('state', state);

        if (state !== undefined) {
          setInitialState(state);
        }

        setIsReady(true);
      });
  }, [getInitialState]);

  useEffect(() => {
    Linking.getInitialURL()
      .then((result) => console.log('getInitialURL result', result))
      .catch((error) => console.error('error getInitialURL', error));

    setContainer(navigationRef);
    RNBootSplash.hide({ duration: 250 });
  }, []);

  if (!isReady) return null;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationNativeContainer
            initialState={initialState}
            ref={navigationRef}
          >
            <RootNavigator />
          </NavigationNativeContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
