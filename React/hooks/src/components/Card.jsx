export const Card = ({ data, index, deleteHandler, editHandler }) => {
    console.log('Card started');
    if (data && index) {
        return (
            <section
                className={`${index % 2 == 0 ? `border-green-800` : `border-red-800`
                    } border-solid border-[1px] p-5 max-w-64`}
            >
                <h2 className="text-2xl my-5">{data.title}</h2>
                <p>{data.description}</p>
                <button
                    className="outline px-2 m-3"
                    onClick={deleteHandler.bind(this, data.id)}
                >
                    Delete
                </button>
                <button
                    className="outline px-2 m-3"
                    onClick={editHandler.bind(this, data)}
                >
                    Edit
                </button>
            </section>
        );
    }

    return null;
};