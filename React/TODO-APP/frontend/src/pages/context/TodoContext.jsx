import { createContext, useContext, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // console.log(tasks);

  const getTasksHandler = async () => {
    try {
      setIsLoading(true);
      const tasks = await axios.get("http://localhost:5000/task/get");
      setTasks(tasks.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  const addTaskHandler = async () => {
    try {
      const newTask = { title: data, status: "pending" };
      const task = await axios.post("http://localhost:5000/task/add", newTask);

      setTasks([...tasks, task.data.data]);

      // reset field
      setData("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteAllTasksHandler = async () => {
    try {
      await axios.delete("http://localhost:5000/task/delete");
      setTasks([]);
    } catch (error) {
      console.log(error.message);
    }
  };

  const makePendingHandler = async (id) => {
    try {
      await axios.put(`http://localhost:5000/task/update/${id}`, {
        status: "completed",
      });

      setTasks((prevTask) => {
        const remainingTask = prevTask.map((task) => {
          if (task._id === id) {
            return { ...task, status: "completed" };
          }
          return task;
        });
        // console.log(remainingTask);
        return remainingTask;
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteTaskHandler = async (id) => {
    // console.log(id, "id");

    try {
      await axios.delete(`http://localhost:5000/task/delete/${id}`);

      setTasks((prevTask) => {
        const remainingTask = prevTask.filter((task) => task._id !== id);
        // console.log(remainingTask);
        return remainingTask;
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const makeCompletionHandler = async (id) => {
    try {
      await axios.put(`http://localhost:5000/task/update/${id}`, { status: "completed" });

      setTasks((prevTask) => {
        const remainingTask = prevTask.map((task) => {
          if (task._id === id) {
            return { ...task, status: "completed" };
          }
          return task;
        });
        // console.log(remainingTask);
        return remainingTask;
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const onChangeHandler = (e) => setData(e.target.value);

  return (
    <TodoContext.Provider
      value={{
        tasks,
        data,
        getTasksHandler,
        addTaskHandler,
        deleteAllTasksHandler,
        makePendingHandler,
        onChangeHandler,
        deleteTaskHandler,
        makeCompletionHandler,
        isLoading,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
