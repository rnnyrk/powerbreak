import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { User } from '@react-native-community/google-signin';

import { configureGoogleLogin, loginWithGoogle } from 'services/socialLogin';
import { navigate } from 'services/navigationService';
import { Button } from 'common/interaction';

import { LoadingContainer } from './styled';

const Login: React.FC = () => {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();

  useEffect(() => {
    configureGoogleLogin();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = (user: User | null) => {
    setUser(user);
    if (initilizing) {
      setInitilizing(false);
    }
  };

  if (initilizing) return null;

  if (!user) {
    return (
      <LoadingContainer>
        <Text>Login</Text>
        <Button
          onPress={loginWithGoogle}
          title="Login with Google"
        />
      </LoadingContainer>
    );
  }

  return (
    <LoadingContainer>
      <Text>Welcome</Text>
      <Button
        onPress={() => navigate('Main')}
        title="Ga to home"
      />
    </LoadingContainer>
  );
};

export default Login;
