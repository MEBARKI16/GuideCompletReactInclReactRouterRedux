import Button from "./Button.jsx"
const ProjectSideBar = ({ HandleStartAddingProject, projects, SetId, idSelected }) => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h1>
            <div>
                <Button onClick={HandleStartAddingProject}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map(projet => {
                    let cssClasses = "w-full text-left px-2 py-1 my-1 rounded-sm hover:text-stone-200 hover:bg-stone-800";
                    if (projet.id === idSelected) { cssClasses += " bg-stone-800 text-stone-200" }
                    else { cssClasses += " text-stone-400 " }
                    return <li key={projet.id}>
                        <button onClick={() => SetId(projet.id)} className={cssClasses}>{projet.title}</button>
                    </li>
                })}
            </ul>
        </aside>
    );
}
export default ProjectSideBar;