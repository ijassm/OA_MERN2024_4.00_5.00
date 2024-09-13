import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

export const FormDialog = ({ toggleModal, isOpen, data, setCardData }) => {
    console.log('FormDialog started');
    // Initialize state
    const [id] = useState(data?.id || '');

    const [formData, setFormData] = useState({
        title: data?.title || '',
        description: data?.description || ''
    });

    // Handle input change
    const onChangeHandler = (e) => {
        // console.log(e, "event");
        // console.log(e.target, "target");
        // console.log(e.target.name, "target name");
        // console.log(e.target.value, "target value");
        // console.log(e.target.className, "target className");

        const { name, value } = e.target;

        console.log(name, value);


        // if (name === "title") {
        //   setFormData({ ...formData, title: value })
        // } else {
        //   setFormData({ ...formData, description: value })
        // }

        // console.log(`${name} - ${value}`);

        setFormData({ ...formData, [name]: value })

        // setFormData((prevFormData) => ({
        //   ...prevFormData,
        //   [name]: value
        // }));
    };


    const submitHandler = (e) => {
        e.preventDefault();
        setCardData((prevCardData) => {
            return prevCardData.map((obj) => {
                if (obj.id === id) {
                    return { ...obj, title: formData.title, description: formData.description };
                }
                return obj;
            })
        })
        toggleModal();
    }



    return (
        <>
            {/* Main modal */}
            <div
                id="authentication-modal"
                tabIndex="-1"
                aria-hidden={!isOpen}
                className={`fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${isOpen ? 'flex' : 'hidden'
                    }`}
            >
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Update Form
                            </h3>
                            {/* <h1>{JSON.stringify(formData)}</h1> */}
                            <button
                                type="button"
                                onClick={toggleModal}
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <IoIosCloseCircleOutline className="text-[25px]" />
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form className="space-y-4" action="#">
                                <div>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="Enter your Title"
                                        required
                                        value={formData.title}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={10}
                                        name="description"
                                        id="description"
                                        placeholder="Enter your Description"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                        value={formData.description}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={submitHandler}
                                >
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};