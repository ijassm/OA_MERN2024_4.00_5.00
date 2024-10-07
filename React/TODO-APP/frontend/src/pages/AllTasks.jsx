import { TodoItem } from "../components/TodoItem";
import { useTodoContext } from "./context/TodoContext";

export function AllTasks() {
    const { tasks } = useTodoContext();

    if (tasks) {
        return (
            <main className="mx-4 my-5">
                {/* Check if there are all tasks */}
                {tasks.map((task) => (
                    <TodoItem key={task._id} task={task} />
                ))}
            </main>
        );
    } else {
        return <h1>No data found</h1>
    }
}
