import { useState } from 'react';
import Header from "./component/Header.jsx";
import UserInput from "./component/UserInput.jsx";
import Results from "./component/Results.jsx";

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 5,
});
const [initialInvestment, setInitialInvestment] =useState(10000);
const [annualInvestment, setAnnualInvestment] =useState(1200);
const [expectedReturn, setExpectedReturn] =useState(6);
const [duration, setDuration] =useState(5);

//valid
const inputIsValid = duration >= 1;


  return (
  <>
    <Header id="header"/>
    <UserInput initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} setInitialInvestment={setInitialInvestment} setAnnualInvestment={setAnnualInvestment} setExpectedReturn={setExpectedReturn} setDuration={setDuration} />
    {!inputIsValid && <h3 className='center'>Please enter a duration greater than zero.</h3>}
    {inputIsValid && <Results id="result" initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration} />}
  </>
  )
}

export default App
