// import {createStore} from 'redux';
// import {mainReducer} from './Reducer';

// const store = createStore(mainReducer);

// export default store;

//------------------------------------------------------//

import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '../Redux/Reducers/CountReducer';

export const store = configureStore({
  reducer: {
    count: counterReducer,
  },
});

//-----------------------------------------------------------//

// import {createStore, combineReducers} from 'redux';
// import CountReducer from './Reducers/CountReducer';

// const rootReducer = combineReducers({
//   count: CountReducer,
// });

// export const store = createStore(rootReducer);
