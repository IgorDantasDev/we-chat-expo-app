import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {ESliceNames, EThunkNames} from '../types';
import {InitialStateProps} from './types';
import {GoogleSignin, User} from '@react-native-google-signin/google-signin';
import {IGoogleUser} from '~/@types/IGoogleUser';

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  success: false,
  error: false,
} as InitialStateProps;

export const handleGoogleLogin = createAsyncThunk<IGoogleUser, void>(
  EThunkNames.GOOGLE_LOGIN,
  async (_, {rejectWithValue}) => {
    try {
      const {user} = await GoogleSignin.signIn();
      return user;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const authSlice = createSlice({
  name: ESliceNames.AUTH,
  initialState,
  reducers: {
    clear: () => initialState,
  },
  extraReducers: builder => {
    /**
     * Login Builder
     */
    builder.addCase(handleGoogleLogin.pending, state => {
      state.loading = true;
      state.success = false;
      state.isLoggedIn = false;
    });

    builder.addCase(handleGoogleLogin.fulfilled, (state, action) => {
      state.error = false;
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    });

    builder.addCase(handleGoogleLogin.rejected, state => {
      state.error = true;
      state.loading = false;
    });
  },
});

export const {reducer: authSliceReducer, actions: authSliceActions} = authSlice;
