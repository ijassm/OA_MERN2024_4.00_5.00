import { useState } from 'react'
import './App.css'

function App() {
  // console.log(useState(5));

  // const count = useState(5);

  // let state = count[0];
  // const setState = count[1];

  // console.log(state);
  // console.log(setState);


  const [count, setCount] = useState(0)
  // console.log(useState);

  // let count = 5;

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <>
      <h1 onClick={increment}>Count : {count}</h1>
      <button className='increment' onClick={increment}>increment</button>
      <button className='reset' onClick={reset}>reset</button>
      <button className='decrement' onClick={decrement}>decrement</button>
    </>
  )
}

export default App
