import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSideBar from "./Components/ProjectsSideBar";
import { useState } from 'react';
import SelectedProject from "./Components/SelectedProject";

function App() {

  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: []
    }
  )
  const HandleAddTask = (task) => {
    const t = {
      name: task,
      projectId: projectState.selectedProjectId,
      id: Math.random()
    }
    setProjectState(prev => { return { ...prev, tasks: [...prev.tasks, t] } }
    )
  }
  const HandleDeleteTask = (id) => {
    setProjectState(prev => ({
      ...prev,
      tasks: prev.tasks.filter(p => p.id !== id)
    }))
  }
  const HandleStartAddingProject = () => {
    setProjectState((prev) => {
      return (
        {
          ...prev,
          selectedProjectId: null
        }
      )
    })
  }
  const HandleAddProjet = (newProjet) => {
    const projet = {
      ...newProjet,
      id: Math.random()
    }
    setProjectState(prev => { return { ...prev, selectedProjectId: undefined, projects: [...prev.projects, projet] } }
    )
  }
  const HandleCanceled = () => {
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: undefined
    }))
  }
  const SetId = (id) => {
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: id
    }))
  }
  const DeletProject = () => {
    setProjectState(prev => ({
      ...prev,
      selectedProjectId: undefined,
      projects: prev.projects.filter(p => p.id !== prev.selectedProjectId)
    }))
  }
  const tasks = projectState.tasks.filter(x => x.projectId === projectState.selectedProjectId)
  const element = projectState.selectedProjectId
    ? projectState.projects.find(el => el.id === projectState.selectedProjectId)
    : null;

  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectSideBar idSelected={projectState.selectedProjectId} SetId={SetId} HandleStartAddingProject={HandleStartAddingProject} projects={projectState.projects} />
      {
        projectState.selectedProjectId === null ?
          <NewProject HandleAddProjet={HandleAddProjet} HandleCanceled={HandleCanceled} />
          :
          projectState.selectedProjectId === undefined ?
            <NoProjectSelected HandleStartAddingProject={HandleStartAddingProject} />
            :
            <SelectedProject tasks={tasks} HandleDeleteTask={HandleDeleteTask} HandleAddTask={HandleAddTask} DeletProject={DeletProject} element={element} />
      }

    </div>

  );
}

export default App;
