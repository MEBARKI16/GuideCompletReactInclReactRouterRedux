const ProjectSideBar = () => {
    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h1>
            <div>
                <button className="px-4 py-2 rounded-md text-xs bg-stone-700 text-stone-400 md:text-base hover:bg-stone-600 hover:text-stone-100 font-semibold">+ Add Project</button>
            </div>
            <ul></ul>
        </aside>
    );
}
export default ProjectSideBar;