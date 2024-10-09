import { createContext, useContext, useState } from "react";
import axios from "axios";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [data, setData] = useState("");
  const [taskCount, setTaskCount] = useState({ pendingCount: 0, completedCount: 0, totalCount: 0 });
  const [isLoading, setIsLoading] = useState(false);

  // console.log(tasks);


  const getTaskCount = (data) => {
    let pendingCount = 0;
    let completedCount = 0;
    let totalCount = data.length;

    data.forEach((task) => {
      if (task.status === "pending") {
        pendingCount++;
      } else if (task.status === "completed") {
        completedCount++;
      }
    });

    return {
      pendingCount,
      completedCount,
      totalCount
    }

  }

  const getTasksHandler = async () => {
    try {
      setIsLoading(true);
      const tasks = await axios.get("http://localhost:5000/task/get").then((response) => response.data);
      const { data } = tasks;

      setTasks(data);
      setTaskCount(getTaskCount(data));

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


      setTaskCount((taskCount) => {
        return {
          ...taskCount,
          pendingCount: taskCount.pendingCount + 1,
          totalCount: taskCount.totalCount + 1,
        }
      })

      // reset field
      setData("");
    } catch (error) {
      console.log(error.message);
    }
  };

  const deleteAllTasksHandler = async () => {
    try {
      await axios.delete("http://localhost:5000/task/delete");


      // clear all states
      setTasks([]);
      setTaskCount({
        pendingCount: 0,
        completedCount: 0,
        totalCount: 0
      });

    } catch (error) {
      console.log(error.message);
    }
  };

  const makePendingHandler = async (id) => {
    try {
      await axios.put(`http://localhost:5000/task/update/${id}`, {
        status: "pending",
      });

      setTasks((prevTask) => {
        const remainingTask = prevTask.map((task) => {
          if (task._id === id) {
            return { ...task, status: "pending" };
          }
          return task;
        });
        // console.log(remainingTask);
        return remainingTask;
      });


      setTaskCount((taskCount) => {
        return {
          ...taskCount,
          pendingCount: taskCount.pendingCount + 1,
          completedCount: taskCount.completedCount - 1
        }
      })


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


      setTaskCount((taskCount) => {
        return {
          ...taskCount,
          pendingCount: taskCount.pendingCount - 1,
          completedCount: taskCount.completedCount + 1
        }
      })


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
        taskCount
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export const useTodoContext = () => useContext(TodoContext);
