import { useSelector, useDispatch } from "react-redux";
// import { counterActions } from "../store/index.js";
import { counterActions } from "../store/counter.js";

 const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.counter.count);//automatically subscribe and receive latest value
  const show = useSelector(state => state.counter.showCounter);

 console.log(counterValue);

//  const incrementHandler = () => {
//   dispatch({type: 'increment'});
// };

//   const increaseHandler = () =>{
//     dispatch({type: 'increase', payload: 5, })
//   };

// const decrementHandler = () => {
//    dispatch({type: 'decrement'});
//  };

//   const  togglerCounterHandler = () => {
//     dispatch({type: 'toggle'})
//   };
 const incrementHandler = () => {
  dispatch(counterActions.increment());
};

  const increaseHandler = () =>{
    dispatch(counterActions.increase(5));// {type: SOME_UNIQUE_IDENTIFIER, payload: 10}
  };

const decrementHandler = () => {
   dispatch(counterActions.decrement()); 
 };

  const  togglerCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className="card">
        <h2 style={{textAlign:'center', color: "crimson", height: "36px",}}>{show && `Count is ${counterValue}`}</h2>
        <button style={{padding: '4px 8px', marginInline: '4px',}} onClick={incrementHandler}>
          +
        </button>
        <button style={{padding: '4px 8px', marginInline: '4px',}} onClick={increaseHandler}>
          increase by 5
        </button>
        <button style={{padding: '4px 8px', marginInline: '4px',}} onClick={decrementHandler}>
          -
        </button>
        <button onClick={togglerCounterHandler} style={{marginInline: '4px',}}>Toggle</button>
      </div>
  );
}
export default Counter;