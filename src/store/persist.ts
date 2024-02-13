import AsyncStorage from '@react-native-async-storage/async-storage';
import {AnyAction, combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {ESliceNames} from './slices/types';
import {authSliceReducer as auth} from './slices/auth';

const combinedReducers = combineReducers({
  auth,
});

const reducerProxy = (state: any, action: AnyAction) => {
  return combinedReducers(state, action);
};

export const persistedReducers = () => {
  const persistedReducer = persistReducer(
    {
      key: 'we-chat',
      storage: AsyncStorage,
      // WhiteList contains a list of Slices names which can be stored on AsyncStorage
      whitelist: [ESliceNames.AUTH],
    },
    reducerProxy as typeof combinedReducers,
  );

  return persistedReducer;
};
