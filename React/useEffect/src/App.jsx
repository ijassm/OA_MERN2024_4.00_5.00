import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        // console.log(json);

        setData(json)
      })
  }, [])

  return (
    <main className='max-w-screen-lg flex flex-wrap p-5 m-auto gap-3'>
      {
        data.map((obj) => {
          // console.log(obj, "---");
          console.log(obj.completed, "---");

          return <section section key={obj.id} className='border-2 border-teal-600 p-4' >
            <h1 className='text-red-900 text-2xl'>{obj.title}</h1>
            <p className='text-red-900'>Status - {obj.completed}</p>
          </section>

        }


        )
      }
    </main >
  )
}

export default App
