import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import {persistedReducers} from './persist';
// @ts-ignore
import Reactotron from '../config/reactotronConfig';
import {buildGetDefaultEnhancers} from '@reduxjs/toolkit/dist/getDefaultEnhancers';

export const store = configureStore({
  reducer: persistedReducers(),
  // @ts-ignore
  enhancers: () => (Reactotron ? [Reactotron.createEnhancer()] : undefined),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
