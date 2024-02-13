import React from 'react';
import {Container} from './styles';
import {Button} from 'react-native';
import {useAppDispatch} from '~/hooks/redux/useAppDispatch';
import {handleGoogleLogin} from '~/store/slices/auth';

export const Login: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    dispatch(handleGoogleLogin());
  };

  return (
    <Container>
      <Button onPress={handleLogin} title="Login with Google" />
    </Container>
  );
};
