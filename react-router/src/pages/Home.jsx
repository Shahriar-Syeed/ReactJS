import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from 'react-router-dom';

 const HomePage = () => {
  const [count, setCount] = useState(0);
  return (
    <>
    <div style={{padding: '20px', background: 'skyblue',}}>
      <h1>My Home Page</h1>
      <h3>
        Go to <Link to="/products">the list of products</Link>
      </h3>
    </div>
    <div>
        <Link to='/products' target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link>
        <Link to='/products' target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}
export default HomePage;