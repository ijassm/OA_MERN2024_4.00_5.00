import { TodoItem } from "../components/TodoItem";
import { useTodoContext } from "./context/TodoContext";

export function CompletedTasks() {
    const { tasks } = useTodoContext();

    // Filter completed tasks
    const completedTasks = tasks.filter(task => task.status === "completed");

    return (
        <main className="mx-4 my-5">
            {/* Check if there are completed tasks */}
            {completedTasks.length > 0 ? (
                completedTasks.map((task) => (
                    <TodoItem key={task._id} task={task} />
                ))
            ) : (
                <h1>No completed task found</h1>
            )}
        </main>
    );
}
