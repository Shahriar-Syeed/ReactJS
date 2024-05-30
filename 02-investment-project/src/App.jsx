import { useState } from 'react';
import Header from "./component/Header.jsx";
import UserInput from "./component/UserInput.jsx";
import Results from "./component/Results.jsx";

function App() {

const [initialInvestment, setInitialInvestment] =useState(10000);
const [annualInvestment, setAnnualInvestment] =useState(1200);
const [expectedReturn, setExpectedReturn] =useState(6);
const [duration, setDuration] =useState(5);
console.log(initialInvestment);

const objectOfData ={
  initial: {value :initialInvestment, setFunction: setInitialInvestment},
  annual: {value :annualInvestment, setFunction: setAnnualInvestment},
  returns: {value :expectedReturn, setFunction: setExpectedReturn},
  duration: {value :duration, setFunction: setDuration},
}
//valid
const inputIsValid = duration >= 1;


  return (
  <>
    <Header id="header"/>
    <UserInput objectOfData={objectOfData} />
    {!inputIsValid && <h3 className='center'>Please enter a duration greater than zero.</h3>}
    {inputIsValid && <Results id="result" objectOfData={objectOfData} />}
  </>
  )
}

export default App
