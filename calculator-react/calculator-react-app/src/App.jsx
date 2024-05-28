import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="calculator">
        {/* <!-- Display --> */}
        <div class="calculator-display">
            <h1>0</h1>
        </div>
        {/* <!-- buttons --> */}
        <div class="calculator-buttons">
            <button class="operator" value="+">+</button>
            <button class="operator" value="-">-</button>
            <button class="operator" value="*">×</button>
            <button class="operator" value="/">÷</button>
            <button value="7">7</button>
            <button value="8">8</button>
            <button value="9">9</button>
            <button value="4">4</button>
            <button value="5">5</button>
            <button value="6">6</button>
            <button value="1">1</button>
            <button value="2">2</button>
            <button value="3">3</button>
            <button class="decimal" value=".">.</button>
            <button value="0">0</button>
            <button class="clear" id="clear-btn">C</button>
            <button class="equal-sign operator" value="=">=</button>
        </div>
    </div>
    </>
  )
}

export default App
