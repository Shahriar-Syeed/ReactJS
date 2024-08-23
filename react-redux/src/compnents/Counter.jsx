import { useSelector, useDispatch } from "react-redux";

 const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(state => state.count);//automatically subscribe and receive latest value

 console.log(counterValue);

 const incrementHandler = () => {
  dispatch({type: 'increment'});
};

const decrementHandler = () => {
   dispatch({type: 'decrement'});
 };

  const  togglerCounterHandler = () => { };
  return (
    <div className="card">
      <h2 style={{textAlign:'center', color: "crimson"}}>Count is {counterValue}</h2>
        <button style={{padding: '4px 8px', marginInline: '4px',}} onClick={incrementHandler}>
          +
        </button>
        <button style={{padding: '4px 8px', marginInline: '4px',}} onClick={decrementHandler}>
          -
        </button>
        <button onClick={togglerCounterHandler} style={{marginInline: '4px',}}>Toggle</button>
      </div>
  );
}
export default Counter;