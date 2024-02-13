import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const googleSignInInit = () => {
  return GoogleSignin.configure({
    offlineAccess: true,
    scopes: ['profile', 'email'],
    webClientId:
      '952850352941-bu2kuvd9upp94cltok6qai3cg8sqr6oq.apps.googleusercontent.com',
  });
};
