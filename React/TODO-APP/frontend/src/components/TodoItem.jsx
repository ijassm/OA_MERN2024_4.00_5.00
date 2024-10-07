import { useTodoContext } from "../pages/context/TodoContext";

export function TodoItem({ task }) {

    const {
        deleteTaskHandler,
        makeCompletionHandler,
    } = useTodoContext();

    console.log(task);

    const { _id, title, status } = task;

    const isStatus = status === "completed";


    const handleCheckboxChange = () => {
        makeCompletionHandler(_id); // Mark task as completed
    };

    return (
        <main className="flex items-center my-4">
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
            <button
                className="bg-red-500 text-white rounded px-5 ml-auto"
                onClick={() => deleteTaskHandler(_id)} // Use arrow function to pass the argument correctly
            >
                Delete
            </button>
        </main>
    );
}
