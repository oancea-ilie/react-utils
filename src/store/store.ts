/* eslint-disable import/no-unused-modules */
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { templateApiSlice } from './template/templateApiSlice';
import { authApiSlice } from './auth/authApiSlice';

export const store = configureStore({
  reducer: {
    [templateApiSlice.reducerPath]: templateApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      templateApiSlice.middleware,
      authApiSlice.middleware,
    ),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
