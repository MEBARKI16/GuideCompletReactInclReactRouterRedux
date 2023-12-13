import Button from "./Button.jsx"
const ProjectSideBar = ({ HandleStartAddingProject }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h1>
            <div>
                <Button onClick={HandleStartAddingProject}>+ Add Project</Button>
            </div>
            <ul></ul>
        </aside>
    );
}
export default ProjectSideBar;