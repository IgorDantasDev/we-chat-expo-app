import React from 'react';
import {Container} from './styles';
import {Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const Login: React.FC = () => {
  const handleGoogleLogin = async () => {
    try {
    const test =  await GoogleSignin.signIn();
    console.log(test)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Button onPress={handleGoogleLogin} title="Login with Google" />
    </Container>
  );
};
