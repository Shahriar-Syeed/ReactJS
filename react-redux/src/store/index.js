import {createStore} from 'redux';

const initialState = {count:0,showCounter : true,};

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
