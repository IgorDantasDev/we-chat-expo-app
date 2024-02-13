import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ESliceNames } from "../types";
import { InitialStateProps } from "./types";

const initialState = {
  user: null,
  loading: false,
  isLoggedIn: false,
  success: false,
  error: false,
} as InitialStateProps;

export const authSlice = createSlice({
  name: ESliceNames.AUTH,
  initialState,
  reducers: {
    clear: () => initialState,
  },
});

export const { reducer: authSliceReducer, actions: authSliceActions } =
  authSlice;
