import {IGoogleUser} from '~/@types/IGoogleUser';

export interface InitialStateProps {
  user: IGoogleUser;
  isLoggedIn: boolean;
  loading: boolean;
  success: boolean;
  error: boolean;
}
