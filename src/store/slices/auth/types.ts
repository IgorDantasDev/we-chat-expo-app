import {User} from '@react-native-google-signin/google-signin';

export interface InitialStateProps {
  user: User;
  isLoggedIn: boolean;
  loading: boolean;
  success: boolean;
  error: boolean;
}
