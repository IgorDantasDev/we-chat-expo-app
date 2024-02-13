import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '~/screens/Login';

const {Navigator, Screen} = createNativeStackNavigator<SignInParamsList>();

export const SignInNavigator = () => {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
