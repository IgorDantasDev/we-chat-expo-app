import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '~/screens/Home';
import {Chat} from '~/screens/Chat';
import {Login} from '~/screens/Login';
import {SignedInNavigator} from './SignedInNavigator';
import {SignInNavigator} from './SignInNavigator';
import {useAppSelector} from '~/hooks/redux/useAppSelector';

const {Navigator, Screen} = createNativeStackNavigator();

export const Routes: React.FC = () => {
  /**
   * Redux
   */
  const {isLoggedIn} = useAppSelector(state => state.auth);

  return isLoggedIn ? <SignedInNavigator /> : <SignInNavigator />;
};
