import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers/rootReducer';

export const store = configureStore({
  reducer: {
    root: rootReducer,
  },
});
