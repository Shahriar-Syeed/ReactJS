import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';
import Counter2 from './components/Counter/Counter2.jsx';

function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
    setChosenCount((prevChosenCount)=>prevChosenCount+1)
    console.log(chosenCount); //won't work
  }

  return (
    <>
      <Header />
      <main>
        {/* <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleSetClick}>Set</button>
        </section> */}
        <ConfigureCounter onSet={handleSetCount}/>
        <Counter  initialCount={chosenCount} />
        <Counter2 key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
