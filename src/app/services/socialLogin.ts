import { firebase } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-community/google-signin';

import { navigate } from 'services/NavigationService';

export const configureGoogleLogin = async () => {
  GoogleSignin.configure({
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    webClientId: '46769492028-npd3gi9bctscav7e2s2b5qd1a9368ul0.apps.googleusercontent.com',
  });

  const isSignedIn = await GoogleSignin.isSignedIn();

  if (isSignedIn) {
    try {
      const { accessToken, idToken } = await GoogleSignin.signInSilently();
      navigate('Main');
    } catch (error) {
      console.error('error', error);
    }
  }
};

export const loginWithGoogle = () => new Promise((resolve, reject) => {
  GoogleSignin.signIn()
    .then(async ({ accessToken, idToken }) => {
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      await firebase.auth().signInWithCredential(credential);

      navigate('Main');
      resolve();
    })
    .catch((error) => {
      reject(error);
    });
});

export const logoutFromGoogle = () => new Promise(async (resolve, reject) => {
  await GoogleSignin.revokeAccess();
  GoogleSignin.signOut()
    .then(() => {
      navigate('Login', { resetAuthToken: true });
      resolve();
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
});
