import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";

const NewProject = ({ HandleAddProjet, HandleCanceled }) => {
    const title = useRef();
    const modalRef = useRef();
    const description = useRef();
    const date = useRef();
    const handleClick = () => {
        const entredTitle = title.current.value;
        const entredDescription = description.current.value;
        const entredDate = date.current.value;
        if (entredTitle.trim() === '' || entredDescription.trim() === '' || entredDate.trim() === '') {
            modalRef.current.open();
            return;
        }
        const proj = {
            title: entredTitle,
            description: entredDescription,
            date: entredDate
        }
        HandleAddProjet(proj);
    }
    return (
        <>
            <Modal ref={modalRef}>
                <h2 className="text-xl font-bold my-4 text-stone-500">Invalid Input</h2>
                <p className="text-stone-400 mb-4">Oops ... looks like you forget to enter a value</p>
                <p className="text-stone-400 mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end py-4 gap-4">
                    <p><button onClick={HandleCanceled} className="text-stone-800 hover:text-stone-950">Cancel</button></p>
                    <p><button onClick={handleClick} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></p>
                </menu>
                <div>
                    <Input ref={title} type="text" label="Title" />
                    <Input ref={description} isTextArea={true} label="Description" />
                    <Input ref={date} type="date" label="Due Date" />
                </div>
            </div>
        </>

    );
}
export default NewProject;