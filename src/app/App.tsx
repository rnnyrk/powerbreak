import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { navigationRef } from 'services/navigationService';

import { store } from './store';

const App: React.FC = () => {
  enableScreens();

  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <NavigationNativeContainer ref={navigationRef}>
            <RootNavigator />
          </NavigationNativeContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
