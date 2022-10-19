import {configureStore} from '@reduxjs/toolkit';
import siteReducer from './Reducers/Slice';

export const store = configureStore({
  reducer: {
    site: siteReducer,
  },
});


