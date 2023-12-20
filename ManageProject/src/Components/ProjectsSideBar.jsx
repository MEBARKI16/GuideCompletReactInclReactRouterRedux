import Button from "./Button.jsx"
const ProjectSideBar = ({ HandleStartAddingProject, projects }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h1>
            <div>
                <Button onClick={HandleStartAddingProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map(projet => <li key={projet.id}>
                    <button className="w-full text-left px-2 py-1 my-1 rounded-sm text-stone-400 hover:text-stone-200 hover:bg-stone-800">{projet.title}</button>
                </li>)}
            </ul>
        </aside>
    );
}
export default ProjectSideBar;