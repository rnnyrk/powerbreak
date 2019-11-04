import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { User } from '@react-native-community/google-signin';

import { configureGoogleLogin, loginWithGoogle } from 'services/socialLogin';
import { Button } from 'common/interaction';

import { LoadingContainer } from './styled';

const Login: React.FC = () => {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();
  const navigation = useNavigation();

  useEffect(() => {
    configureGoogleLogin();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const onAuthStateChanged = (user: User) => {
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
      <Text>Welcome {user.email}</Text>
      <Button
        onPress={() => navigation.replace('Main', {})}
        title="Go to main"
      />
    </LoadingContainer>
  );
};

export default Login;
