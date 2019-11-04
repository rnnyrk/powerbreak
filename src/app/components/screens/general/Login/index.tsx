import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { User } from '@react-native-community/google-signin';
import { useRoute } from '@react-navigation/core';
import * as i from 'types';

import { configureGoogleLogin, loginWithGoogle } from 'services/socialLogin';
import { navigate } from 'services/navigationService';
import { useSelector, useDispatch } from 'services/hooks';
import { Button } from 'common/interaction';
import { Container } from 'common/general';
import { setAuth, resetAuth } from 'ducks/auth';

const Login: React.FC = () => {
  const [init, setInit] = useState(true);
  const route = useRoute<i.LoginScreenRouteProp>();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.data.accessToken);

  useEffect(() => {
    const { resetAuthToken } = route.params;

    if (accessToken && resetAuthToken) {
      navigate('Main');
    } else if (resetAuthToken) {
      dispatch(resetAuth());
    }
  }, [accessToken]);

  useEffect(() => {
    configureGoogleLogin();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = (user: User | null) => {
    if (user) {
      dispatch(setAuth(user.accessToken));
    }

    if (init) {
      setInit(false);
    }
  };

  if (init) return null;

  return !accessToken ? (
    <Container>
      <Button
        onPress={loginWithGoogle}
        title="Login with Google"
        variant="secondary"
      />
    </Container>
  ) : null;
};

export default Login;
