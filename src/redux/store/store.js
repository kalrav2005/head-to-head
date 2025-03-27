import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../reducers/counterReducer';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools
});

export default store;
