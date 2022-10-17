// const initialState = {
//   count: 0,
// };

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case 'COUNT_INCRESE':
//       return {
//         ...state,
//         count: state.count + 1,
//       };
//     case 'COUNT_DECRESE':
//       return {
//         ...state,
//         count: state.count - 1,
//       };
//     default:
//       return state;
//   }
// };
//=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-==-=-=-==-=-=-=-=-=-=-=====------=-==-=-=-==-//
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
