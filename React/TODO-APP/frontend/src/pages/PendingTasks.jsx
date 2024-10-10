import { TodoItem } from "../components/TodoItem";
import { useTodoContext } from "../context/TodoContext";

export function PendingTasks() {
    const { tasks } = useTodoContext();

    // Filter pending tasks
    const pendingTasks = tasks.filter(task => task.status === "pending");

    return (
        <main className="mx-4 my-5">
            {/* Check if there are pending tasks */}
            {pendingTasks.length > 0 ? (
                pendingTasks.map((task) => (
                    <TodoItem key={task._id} task={task} />
                ))
            ) : (
                <h1>No pending task found</h1>
            )}
        </main>
    );
}
