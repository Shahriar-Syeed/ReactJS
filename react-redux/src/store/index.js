// import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {count:0,showCounter : true,};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers:{
    increment(state){
      state.count++;
    },
    decrement(state){
      state.count--;
    },
    increase(state, action){
      state.count = state.count+action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    },
  }

});
// we don't need old counterReducer because of toolkit
// const counterReducer = (state=initialState, action)=>{
//   if(action.type === 'increment'){
//     // state.count++; //never mutate existing state, always return and override the state with return.
//     return {
//       count: state.count + 1,
//       showCounter : state.showCounter,
//     };
//   }else if(action.type === 'increase'){
//     return {
//       count: state.count + action.payload,
//       showCounter : state.showCounter,
//     };
//   }else if(action.type === 'decrement'){
//     return {
//       count: state.count - 1,
//       showCounter : state.showCounter,
//     };
//   }else if(action.type === 'toggle'){
//     return {
//       count: state.count,
//       showCounter : !state.showCounter,
//     };
//   }else
//   return state;
// }

// const store = createStore(counterReducer);
// const store = createStore(counterSlice.reducer);


const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
  },
});

export const counterActions = counterSlice.actions; //action identifier with method

export default store;
