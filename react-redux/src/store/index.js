import {createStore} from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {count:0,showCounter : true,};

createSlice({
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
      state.count = state.count+action.amount
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter;
    },
  }

});

const counterReducer = (state=initialState, action)=>{
  if(action.type === 'increment'){
    // state.count++; //never mutate existing state, always return and override the state with return.
    return {
      count: state.count + 1,
      showCounter : state.showCounter,
    };
  }else if(action.type === 'increase'){
    return {
      count: state.count + action.payload,
      showCounter : state.showCounter,
    };
  }else if(action.type === 'decrement'){
    return {
      count: state.count - 1,
      showCounter : state.showCounter,
    };
  }else if(action.type === 'toggle'){
    return {
      count: state.count,
      showCounter : !state.showCounter,
    };
  }else
  return state;
}

const store = createStore(counterReducer);

export default store;
