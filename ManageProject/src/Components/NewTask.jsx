import { useState } from "react";
const NewTask = ({ HandleAddTask }) => {
    const [task, setTask] = useState('');
    const HandleClick = () => {
        if (!(task.trim() === '')) {
            HandleAddTask(task);
            setTask('');
        }

    }
    return (
        <div className="flex items-center gap-4">
            <input onChange={(e) => setTask(e.target.value)} value={task} type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button onClick={HandleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    )
}
export default NewTask;