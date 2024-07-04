// import Page from './Page';
// import {ThemeContextProvider} from './ThemeContextProvider';

// function App() {
//   return(
//   <ThemeContextProvider>
//     <Page />
//   </ThemeContextProvider>
//   );
// }

// export default App;
// import React from 'react';


// export function counterReducer(state, action) {
//     if(action.type === 'INCREMENT'){      
      
//         return {counter: state.counter++};
//     }
//     if(action.type === 'DECREMENT'){
//        return {counter: state.counter--}
//     }
//     if(action.type === 'RESET'){
       
//         return {counter: 0};
//     }
// }

// function App() {
//     const [counterState, counterDispath]= React.useReducer(counterReducer, {
//         counter: 0,
//     });
//   return (
//     <div id="app">
//       <h1>The (Final?) Counter</h1>
//       <p id="actions">
//         <button onClick={()=>counterDispath({
//             type: 'INCREMENT',
//         })}>Increment</button>
//         <button onClick={()=>counterDispath({
//             type: 'DECREMENT',
//         })}>Decrement</button>
//         <button onClick={()=>counterDispath({
//             type: 'RESET',
//         })}>Reset</button>
//       </p>
//       <p id="counter">{counterState.counter}</p>
//     </div>
//   );
// }

// export default App;

import React from 'react';

export default class App extends React.Component {
  
  render(){
    return(
      <div  className='app'>
        <div>We shall learn useEffect() today</div>
      </div>
    );
  }
}