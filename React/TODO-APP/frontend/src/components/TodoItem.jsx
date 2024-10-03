export function TodoItem({ task, deleteTaskHandler }) {
    const { _id, title } = task;

    return (
        <main className="flex items-center my-4">
            <section className="flex items-center">
                <input className="mr-2 h-5 w-5" type="checkbox" id={_id} />
                <label className="text-[20px]" htmlFor={_id}>{title}</label>
            </section>
            <button className="bg-red-500 text-white rounded px-5 ml-auto" onClick={deleteTaskHandler.bind(this, _id)}>
                Delete
            </button>
        </main>
    )
}
