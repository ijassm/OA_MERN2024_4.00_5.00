import { useState } from 'react'
import './App.css'
import { data } from "./data"

function App() {
  return (
    <>
      <CardApp />
    </>
  )
}


function CardApp() {
  return <>
    <main className='flex gap-12 flex-wrap'>
      {data.map((data, index) => {
        if (index % 2 === 0) {
          return <section key={data.id} className='border-green-800 border-solid border-[1px] p-5 max-w-64'>
            <h2 className='text-2xl my-5'>{data.title}</h2>
            <p>{data.description}</p>
          </section>
        }
        return <section key={data.id} className='border-red-800 border-solid border-[1px] p-5 max-w-64'>
          <h2 className='text-2xl my-5'>{data.title}</h2>
          <p>{data.description}</p>
        </section>
      })}
    </main>
  </>
}

function CounterApp() {
  console.log("app is called");

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
