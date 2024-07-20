import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";
import ButtonAdd from "./ButtonAdd.jsx";

export default function ProjectSidebar() {
  const {handleStartAddProject, projectSelectState, handleSelectProject} = useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl h-screen">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <ButtonAdd onClick={handleStartAddProject}>+ Add Project</ButtonAdd>
      </div>
      <ul className="mt-8">
        {projectSelectState.projects.map((project) =>{
          let cssClasses = "w-full text-left px-2 py-1 mb-1 rounded-sm hover:text-stone-200 hover:bg-stone-800";
          
          if(project.id === projectSelectState.selectedProjectId) {
            cssClasses +=' bg-stone-800 text-stone-200'
          } else{
            cssClasses +=' text-stone-400';
          }
                    
          return (<li key={project.id}>
            {" "}
            <button className={cssClasses} onClick={()=>handleSelectProject(project.id)}>
              {project.title}            
            </button>
          </li>);}
        )}
      </ul>
    </aside>
  );
}
