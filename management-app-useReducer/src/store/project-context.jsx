
import { createContext, useState } from "react";
import NewProject from "../components/NewProject.jsx";
import NoProjectSelected from "../components/NoProjectSelected.jsx";
import SelectedProject from "../components/SelectedProject.jsx";


export const ProjectContext = createContext({
    handleAddTask:()=>{}, 
    handleDeleteTask:()=>{},
  });

  export default function ProjectContextProvider({children}){
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
      });
      
    
      function handleAddTask(textOfTask) {
        setProjectsState((prevState) => {
          const taskId = Math.random();
          const newTask = {
            text: textOfTask,
            projectId: prevState.selectedProjectId,
            id: taskId,
          };
    
          return {
            ...prevState,
            tasks: [...prevState.tasks, newTask],
          };
        });
      }
      function handleDeleteTask(id) {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            tasks: prevState.tasks.filter(
              (task) => task.id !== id
            ),
          };
        });
      }
    
      function handleSelectProject(id) {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: id,
          };
        });
      }
    
      function handleStartAddProject() {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: null,
          };
        });
      }
    
      function handleCancelAddProject() {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: undefined,
          };
        });
      }
    
      function handleAddProject(projectData) {
        setProjectsState((prevState) => {
          const projectId = Math.random();
          const newProject = {
            ...projectData,
            id: projectId,
          };
    
          return {
            ...prevState,
            selectedProjectId: undefined,
            projects: [...projectsState.projects, newProject],
          };
        });
      }
    
      function handleDeleteProject() {
        setProjectsState((prevState) => {
          return {
            ...prevState,
            selectedProjectId: undefined,
            projects: prevState.projects.filter(
              (project) => project.id !== prevState.selectedProjectId
            ),
            tasks: prevState.tasks.filter(
              (task)=>task.projectId !== prevState.selectedProjectId //extra
            ),
          };
        });
      }

      const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
      );
     
      
      const ctxValue ={
        handleAddTask, 
        handleDeleteTask,
        handleStartAddProject,
        projectsState,
        handleSelectProject,
        selectedProject,
        handleDeleteProject,
        handleAddProject,
        handleCancelAddProject,
      };
    return(
        <ProjectContext.Provider value={ctxValue}>
            {children}
        </ProjectContext.Provider>
    );
  }


