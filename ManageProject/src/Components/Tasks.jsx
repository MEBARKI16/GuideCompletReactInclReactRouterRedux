import NewTask from "./NewTask";

const Tasks = ({ HandleAddTask, HandleDeleteTask, tasks }) => {

    return (
        <section>
            <h2 className="text-2xl font-bold mb-4 text-stone-700">Tasks</h2>
            <NewTask HandleAddTask={HandleAddTask} />
            {
                tasks.length === 0 ?
                    <p className="text-stone-800 my-4">This project does not have any tasks yet.</p>
                    :
                    <ul className="p-4 mt-8 rounded-md bg-stone-100">
                        {tasks.map((t) => <li className="flex justify-between my-4" key={t.id}><span>{t.name}</span><button className="text-stone-700 hover:text-red-500" onClick={() => HandleDeleteTask(t.id)}>Clear</button></li>)}
                    </ul>
            }


        </section>
    )
}
export default Tasks;