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

//valid
const inputIsValid = userInput['duration'] >= 1;

function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput=>{
        return {
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
}
  return (
  <>
    <Header id="header"/>
    <UserInput onChanges={handleChange} inputOfUser={userInput} />
    {!inputIsValid && <h3 className='center'>Please enter a duration greater than zero.</h3>}
    {inputIsValid && <Results id="result" input={userInput} />}
  </>
  )
}

export default App
