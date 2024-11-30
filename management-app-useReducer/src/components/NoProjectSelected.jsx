import { useContext } from "react";
import { ProjectContext } from "../store/project-context.jsx";
import noProjectImage from '../assets/no-Projects.png';
import ButtonAdd from "./ButtonAdd";

export default function NoProjectSelected(){
    const {handleStartAddProject} = useContext(ProjectContext);
    return(
        <div className="mt-24 text-center w-2/3" >
            <img src={noProjectImage} alt="An empty class list" className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 my-4 '>No Project Selected</h2>
            <p className='text-stone-400 mb-4'>Select a project or ger stared with a new one</p>
            <p className='mt-8'>
                <ButtonAdd onClick={handleStartAddProject}>Create new project</ButtonAdd>
            </p>
        </div>
    );
}