import { useState } from 'react'

let displayNum = '';
let operatorSign='';
let awaitingNextValue= false;
// let firstValue;
let secondValue;



function App() {
  const [displayValue, setDisplayValue] = useState('0')
  function onInsertValue (event){
    displayNum=displayNum+`${event.target.value}`;
    setDisplayValue(displayNum);
  }
  function onInsertZero(event){
    if(displayValue !== '0'){
      displayNum=displayNum+`${event.target.value}`;
    setDisplayValue(displayNum);
    }
  }
  function onInsertDecimal(){
    if(awaitingNextValue){
      return;
    }

    if(!displayNum.includes('.')){
      if(displayNum === ""){
        displayNum=displayNum+'0.';
      }else{
        displayNum=displayNum+'.';
      }
      setDisplayValue(displayNum);
    }
  }

  function addValues(event){
    if(!awaitingNextValue){
      const firstValue= Number(displayValue);
  awaitingNextValue=true;
  operatorSign=event.target.value;
  displayNum='';
    }else{
      const total = firstValue + Number(displayValue);
      setDisplayValue(total.toString());
      displayNum='';
      awaitingNextValue=false;
    }
  }
  function resetCalculator(){
    setDisplayValue("0");
    displayNum = '';
  }
  
  return (
    <>
      <div class="calculator">
        {/* <!-- Display --> */}
        <div class="calculator-display">
            <h1>{displayValue}</h1><span>{operatorSign}</span>
        </div>
        {/* <!-- buttons --> */}
        <div class="calculator-buttons">
            <button class="operator" value="+" onClick={addValues}>+</button>
            <button class="operator" value="-">-</button>
            <button class="operator" value="*">×</button>
            <button class="operator" value="/">÷</button>
            <button value="7" onClick={onInsertValue}>7</button>
            <button value="8" onClick={onInsertValue}>8</button>
            <button value="9" onClick={onInsertValue}>9</button>
            <button value="4" onClick={onInsertValue}>4</button>
            <button value="5" onClick={onInsertValue}>5</button>
            <button value="6" onClick={onInsertValue}>6</button>
            <button value="1" onClick={onInsertValue}>1</button>
            <button value="2" onClick={onInsertValue}>2</button>
            <button value="3" onClick={onInsertValue}>3</button>
            <button class="decimal" value="." onClick={onInsertDecimal}>.</button>
            <button value="0" onClick={onInsertZero}>0</button>
            <button class="clear" onClick={resetCalculator}>C</button>
            <button class="equal-sign operator" value="=">=</button>
        </div>
    </div>
    </>
  )
}

export default App
