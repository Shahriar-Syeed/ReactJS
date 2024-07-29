import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered');


  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount){
    setChosenCount(newCount);
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
        <Counter initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
