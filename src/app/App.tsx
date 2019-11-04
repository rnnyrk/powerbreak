import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationNativeContainer } from '@react-navigation/native';

import { store } from './store';

import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { navigationRef } from 'services/NavigationService';

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationNativeContainer ref={navigationRef}>
          <RootNavigator />
        </NavigationNativeContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
