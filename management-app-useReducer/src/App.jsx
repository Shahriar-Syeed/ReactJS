import Content from "./components/Content.jsx";
import ProjectContextProvider from "./store/project-context.jsx";


import ProjectSidebar from "./components/ProjectSidebar.jsx";
function App() {

 
  return (
    <ProjectContextProvider >
      <main className="h-screen my-8 flex gap-8">
        <ProjectSidebar />
       <Content/>
      </main>
    </ProjectContextProvider>
  );
}

export default App;
