import { useEffect } from "react";
import { Input } from "../components/Input";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useTodoContext } from "./context/TodoContext";

export const Todo = () => {
    const navigate = useNavigate();
    const {
        getTasksHandler,
        data,
        onChangeHandler,
        addTaskHandler,
        deleteAllTasksHandler,
        isLoading,
        taskCount
    } = useTodoContext();


    useEffect(() => {
        getTasksHandler();
        navigate("all")
    }, []);

    const navStyle = ({ isActive }) => (isActive ? "text-fuchsia-950 font-bold mr-3 cursor-pointer" : "text-black mr-3 cursor-pointer")


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
                    <NavLink
                        className={navStyle}
                        to="all"
                    >
                        <span>All({taskCount.totalCount})</span>
                    </NavLink>
                    <NavLink
                        className={navStyle}
                        to="pending"
                    >
                        <span>Pending({taskCount.pendingCount})</span>
                    </NavLink>
                    <NavLink
                        className={navStyle}
                        to="completed"
                    >
                        <span>Completed({taskCount.completedCount})</span>
                    </NavLink>
                </main>

                <button onClick={deleteAllTasksHandler}>Clear</button>
            </section>
            <hr />

            {isLoading ? <h1 className="my-5">Loading...</h1> : <Outlet />}

            {/* {tasks.length === 0 && <h1 className="my-4">No data found</h1>} */}
        </main>
    );
};
