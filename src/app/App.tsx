import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationNativeContainer } from '@react-navigation/native';

import theme from 'styles/theme';
import { store } from './store';

import RootNavigator from 'navigators/RootNavigator';

const App: React.FC = () => {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NavigationNativeContainer>
          <RootNavigator />
        </NavigationNativeContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
