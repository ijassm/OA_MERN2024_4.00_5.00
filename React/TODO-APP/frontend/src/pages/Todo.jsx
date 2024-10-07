import { useEffect, useState } from "react";
import { Input } from "../components/Input";
import { Outlet } from "react-router-dom";
import { useTodoContext } from "./context/TodoContext";

export const Todo = () => {
    const {
        getTasksHandler,
        data,
        onChangeHandler,
        addTaskHandler,
        deleteAllTasksHandler,
        isLoading,
    } = useTodoContext();


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

            {isLoading ? <h1 className="my-5">Loading...</h1> : <Outlet />}

            {/* {tasks.length === 0 && <h1 className="my-4">No data found</h1>} */}
        </main>
    );
};
