import Input from "./Input";
import { useRef } from "react";

const NewProject = ({ HandleAddProjet }) => {
    const title = useRef();
    const description = useRef();
    const date = useRef();
    const handleClick = () => {
        const entredTitle = title.current.value;
        const entredDescription = description.current.value;
        const entredDate = date.current.value;
        const proj = {
            title: entredTitle,
            description: entredDescription,
            date: entredDate
        }
        HandleAddProjet(proj);
    }
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end py-4 gap-4">
                <p><button className="text-stone-800 hover:text-stone-950">Cancel</button></p>
                <p><button onClick={handleClick} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></p>
            </menu>
            <div>
                <Input ref={title} type="text" label="Title" />
                <Input ref={description} isTextArea={true} label="Description" />
                <Input ref={date} type="date" label="Due Date" />
            </div>
        </div>
    );
}
export default NewProject;