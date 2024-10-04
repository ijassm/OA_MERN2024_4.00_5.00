import { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import axios from "axios";
import { TodoItem } from "../../components/TodoItem";

export const Todo = () => {
    const [tasks, setTasks] = useState([]);
    const [data, setData] = useState("");

    const getTasksHandler = async () => {
        try {
            const tasks = await axios.get("http://localhost:5000/task/get");
            setTasks(tasks.data.data);
        } catch (error) {
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

    const makePendingHandler = async (id) => {
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

    useEffect(() => {
        getTasksHandler();
    }, []);



    return (
        <main className="max-w-[500px] m-auto p-2 bg-white rounded">
            <h1>Todo List 📑</h1>
            <section className="flex my-5">
                <Input
                    className="w-full border border-black py-2 px-1"
                    value={data}
                    onChange={onChangeHandler}
                />
                <button
                    className="bg-orange-700 text-white rounded px-5"
                    onClick={addTaskHandler}
                >
                    Add
                </button>
            </section>
            <section className="flex justify-between">
                <main>
                    <span className="mr-3 cursor-pointer">All</span>
                    <span className="mr-3 cursor-pointer">Pending</span>
                    <span className="mr-3 cursor-pointer">Completed</span>
                </main>
                <button onClick={deleteAllTasksHandler}>Clear</button>
            </section>
            <hr />

            <main className="mx-4">
                {tasks.map((task) => (
                    <TodoItem
                        key={task._id}
                        task={task}
                        deleteTaskHandler={deleteTaskHandler}
                        makeCompletionHandler={makeCompletionHandler}
                    />
                ))}

                {tasks.length === 0 && <h1 className="my-4">No data found</h1>}
            </main>
        </main>
    );
};
