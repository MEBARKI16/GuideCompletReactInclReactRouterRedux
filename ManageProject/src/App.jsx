import NewProject from "./Components/NewProject";
import ProjectSideBar from "./Components/ProjectsSideBar";

function App() {
  return (
    <div className="h-screen my-8 flex gap-8">
      <ProjectSideBar />
      <NewProject />
    </div>

  );
}

export default App;
