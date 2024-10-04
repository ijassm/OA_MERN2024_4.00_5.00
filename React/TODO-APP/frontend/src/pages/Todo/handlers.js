import axios from "axios";

export const getTasksHandler = async () => {
  try {
    const tasks = await axios.get("http://localhost:5000/task/get");
    setTasks(tasks.data.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const addTaskHandler = async () => {
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

export const deleteAllTasksHandler = async () => {
  try {
    await axios.delete("http://localhost:5000/task/delete");
    setTasks([]);
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTaskHandler = async (id) => {
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

export const onChangeHandler = (e) => setData(e.target.value);
