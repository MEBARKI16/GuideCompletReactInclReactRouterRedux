import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSideBar from "./Components/ProjectsSideBar";
import { useState } from 'react';

function App() {

  const [projectState, setProjectState] = useState(
    {
      selectedProjectId: undefined,
      projects: []
    }
  )
  console.log(projectState.projects);
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
    setProjectState(prev => { return { selectedProjectId: undefined, projects: [...prev.projects, projet] } }
    )
  }
  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectSideBar HandleStartAddingProject={HandleStartAddingProject} projects={projectState.projects} />
      {
        projectState.selectedProjectId === null ?
          <NewProject HandleAddProjet={HandleAddProjet} />
          :
          <NoProjectSelected HandleStartAddingProject={HandleStartAddingProject} />
      }

    </div>

  );
}

export default App;
