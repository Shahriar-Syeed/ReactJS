import { useContext, useState} from "react";
import SelectedProject from "./SelectedProject.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";


import { ProjectContext } from "../store/project-context.jsx";


export default function Content (){
    const {projectSelectState} = useContext(ProjectContext);
    let content= <SelectedProject/>;

      if (projectSelectState.selectedProjectId === null) {
        
         content = <NewProject/>;
        
      } else if (projectSelectState.selectedProjectId === undefined) {
        content = <NoProjectSelected />;
      }

      return content;
}