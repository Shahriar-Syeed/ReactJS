import { useState } from 'react';
import BtnNumber from './components/BtnNumber.jsx';

let firstValue=null;
let calculationOfValues = {
  '+': (x, y)=>(x+y).toString(),
  '-': (x, y)=>(x-y).toString(),
  '×': (x, y)=>(x*y).toString(),
  '/': (x, y)=>(x/y).toString(),
  '=': (x, y)=>y.toString(),
};
let displayNum = '';
let awaitingNextValue= false;


function App() {
  const [displayValue, setDisplayValue] = useState('0')
  const [sign, setSign]=useState('');
  //insert value
  function onInsertValue (event){
    const clickButtonValue= event.target.value;
    if(clickButtonValue === '0'&& displayValue === '0'){
      return;
    }
    displayNum=displayNum+`${clickButtonValue}`;
    setDisplayValue(displayNum);
  }

 

  function onInsertDecimal(){
    if(!displayNum.includes('.')){
      if(displayNum === "" ){
        displayNum=displayNum+'0.';
      }else{
        displayNum=displayNum+'.';
      }
      setDisplayValue(displayNum);
    }
  }

  function calculationWithOperator(event){
    const operator= event.target.value;
    if(!awaitingNextValue){
      firstValue= Number(displayValue);
      console.log('firstValue',firstValue)
      setSign(operator);
      awaitingNextValue=true;
      displayNum='';
    }else{
      const result = calculationOfValues[sign](firstValue,Number(displayNum));
      setDisplayValue(result);
      firstValue=Number(result);
      setSign(operator=== '='? '':operator);
      awaitingNextValue = (operator !== '=');
      displayNum='';
    }
  }

  function resetCalculator(){
    setDisplayValue("0");
    displayNum = '';
    setSign('');
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
