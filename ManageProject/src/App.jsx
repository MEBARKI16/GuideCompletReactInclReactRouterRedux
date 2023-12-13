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
  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectSideBar HandleStartAddingProject={HandleStartAddingProject} />
      {
        projectState.selectedProjectId === null ?
          <NewProject />
          :
          <NoProjectSelected HandleStartAddingProject={HandleStartAddingProject} />
      }

    </div>

  );
}

export default App;
