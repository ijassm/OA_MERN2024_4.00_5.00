import { useState } from "react";
import "./App.css";
import { data } from "./data";
import { IoIosCloseCircleOutline } from "react-icons/io";


const FormDialog = ({ toggleModal, isOpen, data }) => {
  // Initialize state
  const [formData, setFormData] = useState({
    title: data?.title || '',
    description: data?.description || ''
  });

  // Handle input change
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };



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

const Card = ({ data, index, deleteHandler, editHandler }) => {
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

function CardApp() {
  const [cardData, setCardData] = useState(data);
  const [isOpen, setIsOpen] = useState(false);
  const [modelData, setModelData] = useState({});



  const deleteHandler = (id) => {
    const newCardDate = cardData.filter((data) => data.id != id);
    console.log("deleteHandler called", id);
    console.log("filter", newCardDate);
    setCardData(newCardDate);
  };

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const editHandler = (data) => {
    setModelData(data);
    toggleModal();
  };

  return (
    <>
      {
        isOpen && (
          <FormDialog
            isOpen={isOpen}
            toggleModal={toggleModal}
            data={modelData}
          />
        )
      }
      <main className="flex gap-12 flex-wrap">
        {cardData.map((data, index) => {
          return (
            <Card
              key={data.id}
              data={data}
              index={index}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
            />
          );
        })}
      </main>
    </>
  );
}

function App() {
  return (
    <>
      <CardApp />
    </>
  );
}

function CounterApp() {
  console.log("app is called");

  // console.log(useState(5));

  // const count = useState(5);

  // let state = count[0];
  // const setState = count[1];

  // console.log(state);
  // console.log(setState);

  const [count, setCount] = useState(0);
  // console.log(useState);

  // let count = 5;

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1 onClick={increment}>Count : {count}</h1>
      <button className="increment" onClick={increment}>
        increment
      </button>
      <button className="reset" onClick={reset}>
        reset
      </button>
      <button className="decrement" onClick={decrement}>
        decrement
      </button>
    </>
  );
}

export default App;
