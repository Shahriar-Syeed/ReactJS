import { useContext, useState} from "react";
import SelectedProject from "./SelectedProject.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";


import { ProjectContext } from "../store/project-context.jsx";


export default function Content (){
    const {projectsState} = useContext(ProjectContext);
    let content= <SelectedProject/>;

      if (projectsState.selectedProjectId === null) {
        
         content = <NewProject/>;
        
      } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected />;
      }

      return content;
}