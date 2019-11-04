import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

import { LoadingContainer } from './styled';
import { Button } from 'common/interaction';

const Login: React.FC<LoginProps> = () => {
  const [initilizing, setInitilizing] = useState(true);
  const [user, setUser] = useState();

  const onAuthStateChanged = (user) => {
    setUser(user);

    if (initilizing) {
      setInitilizing(false);
    }
  };

  const bootstrapFirebase = async () => {
    await GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: '46769492028-npd3gi9bctscav7e2s2b5qd1a9368ul0.apps.googleusercontent.com',
    });
  };

  useEffect(() => {
    bootstrapFirebase();

    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const googleLogin = async () => {
    const { accessToken, idToken } = await GoogleSignin.signIn();
    console.log(accessToken, idToken);

    const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    await firebase.auth().signInWithCredential(credential);
  };

  if (initilizing) return null;

  if (!user) {
    return (
      <LoadingContainer>
        <Text>Login</Text>
        <Button
          onPress={googleLogin}
          title="Login with Google"
        />
      </LoadingContainer>
    );
  }

  return (
    <LoadingContainer>
      <Text>Welcome {user.email}</Text>
    </LoadingContainer>
  );
};

type LoginProps = {};

export default Login;
