import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

declare global {
  export type SignedInParamList = {
    Home: undefined;
    Chat: undefined;
  };
  export type SignInParamsList = {
    Login: undefined;
  };

  export type SignInNavigatorProp = NativeStackNavigationProp<
    SignInParamsList,
    'Login'
  >;

  export type StackNavigatorProp = NativeStackNavigationProp<
    SignedInParamList,
    'Home'
  >;

  export type ChatScreenRouteProp = RouteProp<SignedInParamList, 'Chat'>;
}
