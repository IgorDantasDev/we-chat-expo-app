import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {ESliceNames, EThunkTypeNames} from '../types';
import {InitialStateProps} from './types';
import {IGoogleUser} from '~/@types/IGoogleUser';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  success: false,
  error: false,
} as InitialStateProps;

export const handleGoogleLogin = createAsyncThunk<IGoogleUser, void>(
  EThunkTypeNames.GOOGLE_LOGIN,
  async (_, {rejectWithValue}) => {
    try {
      const {user} = await GoogleSignin.signIn();
      ~console.log(user);
      return user;
    } catch (eventError: any) {
      return rejectWithValue(eventError?.response?.data);
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
    builder.addCase(handleGoogleLogin.pending, state => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(handleGoogleLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.success = true;
      state.loading = false;
    });
    builder.addCase(handleGoogleLogin.rejected, state => {
      state.success = false;
      state.loading = false;
    });
  },
});

export const {reducer: authSliceReducer, actions: authSliceActions} = authSlice;
