import React, { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';
import { NavigationNativeContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';

import theme from 'styles/theme';
import RootNavigator from 'navigators/RootNavigator';
import { setContainer } from 'services/navigationService';

import { store } from './store';

const App: React.FC = () => {
  enableScreens();

  const navigationRef = useRef();

  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
    setContainer(navigationRef);
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

// initialState={initialState}

// import { Linking, Alert } from 'react-native';
// import { NavigationNativeContainer, useLinking } from '@react-navigation/native';

  // const { getInitialState } = useLinking(navigationRef, {
  //   prefixes: ['https://powerbreak.nl', 'powerbreak://'],
  //   config: {
  //     Detail: {
  //       path: 'page/:id',
  //       parse: {
  //         id: Number,
  //       },
  //     },
  //   },
  // });

  // const [isReady, setIsReady] = useState(false);
  // const [initialState, setInitialState] = useState();

  // useEffect(() => {
  //   getInitialState()
  //     .catch((error) => console.error('error getInitialState', error))
  //     .then((state) => {
  //       console.log('state', state);
  //       if(state){
  //         const names = state.routes.map((route) => {
  //           return `${route.name}, ${JSON.stringify(route.params)}`
  //         });

  //         // Alert.alert(names.join(','));
  //       } else {
  //         // Alert.alert(state === undefined ? 'No state' : 'test');
  //       }

  //       if (state !== undefined) {
  //         setInitialState(state);
  //       }

  //       setIsReady(true);
  //     });
  // }, [getInitialState]);

  // useEffect(() => {
  //   Linking.getInitialURL()
  //     .then((url) => {
  //       // if (url) {
  //       //   Alert.alert(`Initial url is: ${url}`);
  //       // } else {
  //       //   Alert.alert('No initial url');
  //       // }
  //     })
  //     .catch((err) => console.error('An error occurred', err));
  // }, []);

  // if (!isReady) return null;
