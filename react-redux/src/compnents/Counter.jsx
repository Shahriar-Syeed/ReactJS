import { useSelector } from "react-redux";

 const Counter = () => {
  const counterValue = useSelector(state => state.count);//automatically subscribe and receive latest value
 console.log(counterValue);
  const  togglerCounterHandler = () => {};
  return (
    <div className="card">
      <h4 style={{textAlign:'center',}}>Count is {counterValue}</h4>
        <button >
          +
        </button>

        <button onClick={togglerCounterHandler}>Toggle</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
  );
}
export default Counter;