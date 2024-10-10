import { useState } from "react";
import { useTodoContext } from "../context";

export function EditTodoItem() {

    const {
        editTask,
        changeEditableTaskHandler,
        updateTaskHandler
    } = useTodoContext();

    const [data, setData] = useState(editTask.title)

    const cancelTask = () => {
        changeEditableTaskHandler(
            {
                _id: null,
                title: null,
                status: null
            }
        )
    }


    const onChangeHandler = (e) => setData(e.target.value)

    return (
        <main className="flex justify-between items-center my-4">
            <section className="flex items-center">
                <input className="border py-1 px-1 border-black rounded" type="text" value={data} onChange={onChangeHandler} />
            </section>
            <div>
                <button
                    className="bg-[#808080] text-white rounded px-5 mx-1"
                    onClick={cancelTask}
                >
                    Cancel
                </button>
                <button
                    className="bg-green-700 text-white rounded px-5 mx-1"
                    onClick={() => updateTaskHandler(editTask._id, data)}
                >
                    Update
                </button>
            </div>
        </main>
    )
}
