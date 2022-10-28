import {configureStore} from '@reduxjs/toolkit';
import siteReducer from './Reducers/Slice';
import userSlice from './Reducers/userSlice';
import {persistReducer} from 'redux-persist';
import {combineReducers} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const reducer = combineReducers({
  site: siteReducer,
  user: userSlice,
});

const persistRed = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistRed,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
