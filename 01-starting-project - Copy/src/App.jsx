import {useState,Fragment} from 'react';

import Header from "./components/Header/Header.jsx";

import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';



function App() {
  
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
