import Input from "./Input";

const NewProject = () => {
    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end py-4 gap-4">
                <p><button className="text-stone-800 hover:text-stone-950">Cancel</button></p>
                <p><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></p>
            </menu>
            <div>
                <Input label="Title" />
                <Input isTextArea={true} label="Description" />
                <Input label="Due Date" />
            </div>
        </div>
    );
}
export default NewProject;