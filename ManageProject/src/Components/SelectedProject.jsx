import Tasks from "./Tasks";

const SelectedProject = ({ element, DeletProject }) => {
    const formattedDate = new Date(element.date).toLocaleDateString("en-US")
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{element.title}</h1>
                    <button onClick={DeletProject} className="text-stone-600 hover:text-stone-950">Delete</button>
                </div>
                <p className="mb-4 text-stone-400">{formattedDate}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{element.description}</p>
            </header>
            <Tasks />
        </div>
    );
}
export default SelectedProject;