import NoProject from "../assets/no-projects.png"
import Button from "./Button";
const NoProjectSelected = ({ HandleStartAddingProject }) => {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={NoProject} alt="An empty task list" className="w-16 h-16 object-contain mx-auto" />
            <h2 className="text-xl font-bold my-4 text-stone-500">No Project Selected</h2>
            <p className="text-stone-400 mb-4">Select a project or get started width a new one</p>
            <p className="mt-8"><Button onClick={HandleStartAddingProject} >Create New Project</Button></p>
        </div>
    );
}
export default NoProjectSelected;