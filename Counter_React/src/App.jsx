import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  const addValue=()=>{
    setCounter(++counter);
  };
  const removeValue=()=>{
    setCounter(--counter);
  };
  const resetValue=()=>{
    setCounter(counter=0);
  };
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <br/>
      <button onClick={resetValue}>ResetValue</button>
    </>
  )
}

export default App
