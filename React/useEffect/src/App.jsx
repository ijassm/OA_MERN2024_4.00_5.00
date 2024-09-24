import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [data, setData] = useState([])
  const [isBool, setBool] = useState(false)

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //   .then(response => response.json())
    //   .then(json => setData(json))

    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(response => setData(response.data))

  }, [])


  useEffect(() => {
    console.log("useEffect is called", data);
  }, [data])

  const onClickHandler = () => {
    setBool(!isBool)
  }

  return (
    <main className='max-w-screen-lg flex flex-wrap p-5 m-auto gap-3'>
      <h1>xcgf</h1>
      {
        data.map((obj) => {
          return <section key={obj.id} className='border-2 border-teal-600 p-4' onClick={onClickHandler} >
            <h1 className='text-red-900 text-2xl'>{obj.title}</h1>
            <p className='text-red-900'>Status - {obj.completed.toString()}</p>
          </section>
        }
        )
      }
    </main >
  )
}

export default App
