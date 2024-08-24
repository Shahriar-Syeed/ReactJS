import {createStore} from 'redux';

const counterReducer = (state={count:0,}, action)=>{
  if(action.type === 'increment'){
    return {
      count: state.count + 1,
    };
  }else if(action.type === 'increase'){
    return {
      count: state.count + action.payload,
    };
  }else if(action.type === 'decrement'){
    return {
      count: state.count - 1,
    };
  }else
  return state;
}

const store = createStore(counterReducer);

export default store;
