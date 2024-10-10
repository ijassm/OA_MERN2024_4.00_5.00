import { useTodoContext } from "../context/TodoContext";
import { EditTodoItem } from "./EditTodoItem";

export function TodoItem({ task }) {

    const {
        deleteTaskHandler,
        makeCompletionHandler,
        makePendingHandler,
        editTask,
        changeEditableTaskHandler
    } = useTodoContext();

    const { _id, title, status } = task;

    const isStatus = status === "completed";


    const handleCheckboxChange = (e) => {
        const checkbox = e.target.checked;

        console.log(checkbox);


        if (checkbox) makeCompletionHandler(_id); // Mark task as completed
        else makePendingHandler(_id); // Mark task as pending
    };


    if (editTask._id === _id) {
        return <EditTodoItem />
    }

    return (
        <main className="flex justify-between items-center my-4">
            <section className="flex items-center">
                <input
                    className="mr-2 h-5 w-5"
                    type="checkbox"
                    id={_id}
                    checked={isStatus} // Conditionally set checked attribute
                    onChange={handleCheckboxChange} // Correctly handle the change event
                />
                <label className="text-[20px]" htmlFor={_id}>
                    {title}
                </label>
            </section>
            <div>
                <button
                    className="bg-green-500 text-white rounded px-5 mx-1"
                    onClick={() => changeEditableTaskHandler(task)} // Use arrow function to pass the argument correctly
                >
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white rounded px-5 mx-1"
                    onClick={() => deleteTaskHandler(_id, status)} // Use arrow function to pass the argument correctly
                >
                    Delete
                </button>
            </div>
        </main>
    );
}
