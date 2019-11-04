import { firebase } from '@react-native-firebase/auth';
import { GoogleSignin, User } from '@react-native-community/google-signin';

export const configureGoogleLogin = async () => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '46769492028-npd3gi9bctscav7e2s2b5qd1a9368ul0.apps.googleusercontent.com',
  });
};

export const loginWithGoogle = async () => {
  const { accessToken, idToken } = await GoogleSignin.signIn();
  console.log(accessToken, idToken);

  const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
  await firebase.auth().signInWithCredential(credential);
};
