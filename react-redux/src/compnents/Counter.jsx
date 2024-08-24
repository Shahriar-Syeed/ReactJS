import { useSelector, useDispatch } from "react-redux";

 const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.count);//automatically subscribe and receive latest value
  const show = useSelector(state => state.showCounter);

 console.log(counterValue);

 const incrementHandler = () => {
  dispatch({type: 'increment'});
};

  const increaseHandler = () =>{
    dispatch({type: 'increase', payload: 5, })
  };

const decrementHandler = () => {
   dispatch({type: 'decrement'});
 };

  const  togglerCounterHandler = () => {
    dispatch({type: 'toggle'})
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