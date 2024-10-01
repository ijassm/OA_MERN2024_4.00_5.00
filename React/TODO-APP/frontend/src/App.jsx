import { useState, useEffect } from 'react'
import './App.css'
import { Input, Todo, TodoItem } from './components'
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    try {
      const tasks = await axios.get("http://localhost:5000/task/get");
      setTasks(tasks.data.data)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getTasks();
  }, [])


  return (
    <Todo className="max-w-[500px] m-auto p-2 bg-white rounded">
      <h1>Todo List 📑</h1>
      <section className='flex my-5'>
        <Input className="w-full border border-black py-2 px-1" />
        <button className='bg-orange-700 text-white rounded px-5'>Add</button>
      </section>
      <section className='flex justify-between'>
        <main>
          <span className='mr-3 cursor-pointer'>All</span>
          <span className='mr-3 cursor-pointer'>Pending</span>
          <span className='mr-3 cursor-pointer'>Completed</span>
        </main>
        <button>Clear</button>
      </section>
      <hr />

      <main className='mx-4'>
        {
          tasks.map((task) => (
            <TodoItem key={task._id} title={task.title} />
          ))
        }
      </main>
    </Todo>
  )
}

export default App
