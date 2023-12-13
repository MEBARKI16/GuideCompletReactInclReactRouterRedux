import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSideBar from "./Components/ProjectsSideBar";

function App() {
  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NoProjectSelected />
    </div>

  );
}

export default App;
