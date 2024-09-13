import { Card, FormDialog } from "../components";
import { data } from "../data";
import { useState } from "react";


export const Concepts = () => {
    console.log('Concepts started');

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
        toggleModal();
        setModelData(data);
    };

    return (
        <main className="w-[95%] max-w-screen-xl mx-auto">
            {
                isOpen && (
                    <FormDialog
                        isOpen={isOpen}
                        toggleModal={toggleModal}
                        data={modelData}
                        setCardData={setCardData}
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
        </main>
    );
}