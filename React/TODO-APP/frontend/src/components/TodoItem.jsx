export function TodoItem({ title }) {
    return (
        <main className="flex items-center my-4">
            <input className="mr-2 h-5 w-5" type="checkbox" />
            <label className="text-[20px]" htmlFor="">{title}</label>
        </main>
    )
}
