import React, { useState, useEffect } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { useRoute } from '@react-navigation/core';
import * as i from 'types';

import { configureGoogleLogin, loginWithGoogle } from 'services/socialLogin';
import { navigate } from 'services/NavigationService';
import { useSelector, useDispatch } from 'services/hooks';
import { Button } from 'common/interaction';
import { Container } from 'common/general';
import { setAuth, resetAuth } from 'ducks/auth';

const Login: React.FC = () => {
  const [init, setInit] = useState(true);
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.data.accessToken);

  const route = useRoute<i.LoginScreenRouteProp>();
  const { resetAuthToken } = route.params;

  useEffect(() => {
    if (accessToken && resetAuthToken) {
      navigate('Main');
    } else if (resetAuthToken) {
      dispatch(resetAuth());
    }
  }, [accessToken, dispatch, resetAuthToken]);

  useEffect(() => {
    configureGoogleLogin();

    const onAuthStateChanged = (user: User | null) => {
      if (user?.accessToken) {
        dispatch(setAuth(user.accessToken));
      }

      if (init) {
        setInit(false);
      }
    };

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [dispatch, init]);

  const handleLogin = () => {
    loginWithGoogle()
      .then((result) => console.info('login result', result))
      .catch((error) => console.error('login error', error));
  };

  if (init) return null;

  return !accessToken ? (
    <Container>
      <Button
        onPress={handleLogin}
        title="Login with Google"
        variant="secondary"
      />
      <Button
        onPress={() => navigate('Main')}
        title="e2e login"
        variant="secondary"
        testID="e2eButton"
      />
    </Container>
  ) : null;
};

type User = FirebaseAuthTypes.User & {
  accessToken?: string;
};

export default Login;
