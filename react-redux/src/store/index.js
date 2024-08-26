// import {createStore} from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCountState = {count:0,showCounter : true,};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCountState,
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

const initialAuthState={
  isAuthenticated: false,
};

const authSlice =createSlice({
name: 'auth',
initialState: initialAuthState,
reducers:{
  login(state){
    state.isAuthenticated =true;
  },
  logout(state){
    state.isAuthenticated = false;
  },
},
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
    auth: authSlice.reducer,
  },
});

export const counterActions = counterSlice.actions; //action identifier with method
export const authActions = authSlice.actions;

export default store;
