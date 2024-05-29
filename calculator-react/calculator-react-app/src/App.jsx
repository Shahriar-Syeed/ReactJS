import { useState } from 'react';
import BtnNumber from './components/BtnNumber.jsx';

let calculationOfValues = {
  '+': (x, y)=>(x+y).toString(),
  '-': (x, y)=>(x-y).toString(),
  '×': (x, y)=>(x*y).toString(),
  '/': (x, y)=>(x/y).toString(),
  '=': (x, y)=>y.toString(),
};
let firstValue=null;
let displayNum = '0';
let awaitingNextValue= false;


function App() {
  const [displayValue, setDisplayValue] = useState('0');
  const [sign, setSign]=useState('');
  //insert value
  function onInsertValue (event){
    // if(displayValue === 'Error' ){
    //   return;
    // }
    const clickButtonValue= event.target.value;
    if(displayNum==='0'){
      displayNum = clickButtonValue;
      if(clickButtonValue === 0){
        return;
      }
    }
    else{
      displayNum=displayNum+`${clickButtonValue}`;
    }
      setDisplayValue(displayNum);
  }
  // function onInsertZero(event){
  //   if(displayValue !== '0'){
  //     displayNum=displayNum+`${event.target.value}`;
  //   setDisplayValue(displayNum);
  //   }
  // }
  function onInsertDecimal(){
    // if(displayValue === 'Error' ){
    //   return;
    // }
    if(!displayNum.includes('.')){
      // if(displayNum === "0" ){
      //   displayNum=displayNum+'0.';
      // }else{
        displayNum=displayNum+'.';
      // }
      setDisplayValue(displayNum);
    }
  }

  function calculationWithOperator(event){
    const operator= event.target.value;
    // if(displayValue === 'Error' ){
    //   return;
    // }
    if(!awaitingNextValue ){
      firstValue= Number(displayValue);
      console.log('firstValue',firstValue)
      setSign(operator);
      awaitingNextValue=true;
      displayNum='0';
    }else{
      const result = calculationOfValues[sign](firstValue,Number(displayNum));
      console.log("result", result, typeof result);
      // if(typeof Number(result) !== Number){
      //   setDisplayValue("Error");
      //   setSign('');
      //   return;
      // }
      setDisplayValue(result);
      firstValue=Number(result);
      setSign(operator=== '='? '':operator);
      awaitingNextValue = (operator !== '=');
      displayNum='0';
    }
  }

  function resetCalculator(){
    setDisplayValue("0");
    displayNum = '0';
    setSign('');
    awaitingNextValue= false;
    firstValue=null;
  }
  
  return (
    <>
      <div className="calculator">
        {/* <!-- Display --> */}
        <div className="calculator-display">
            <h1>{displayValue}</h1><span>{sign}</span>
        </div>
        {/* <!-- buttons --> */}
        <div className="calculator-buttons">
            <BtnNumber className="operator" valueOfBtn="+" onClick={calculationWithOperator}/>
            <BtnNumber className="operator" valueOfBtn="-" onClick={calculationWithOperator}/>
            <BtnNumber className="operator" valueOfBtn="×" onClick={calculationWithOperator}/>
            <BtnNumber className="operator" valueOfBtn= "/" onClick={calculationWithOperator}/>
            
            <BtnNumber valueOfBtn="7" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="8" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="9" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="4" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="5" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="6" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="1" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="2" onClick={onInsertValue}/>
            <BtnNumber valueOfBtn="3" onClick={onInsertValue}/>
            <BtnNumber className="decimal" valueOfBtn="." onClick={onInsertDecimal}/>
            <BtnNumber valueOfBtn="0" onClick={onInsertValue}/>
            <BtnNumber className="clear" valueOfBtn='C' onClick={resetCalculator}/>
            <BtnNumber className="equal-sign operator" valueOfBtn="=" onClick={calculationWithOperator}/>
        </div>
    </div>
    </>
  )
}

export default App
