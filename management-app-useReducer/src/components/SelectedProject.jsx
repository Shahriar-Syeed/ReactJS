import { useContext } from "react";

import { ProjectContext } from "../store/project-context.jsx";

import Tasks from "./Tasks.jsx";

export default function SelectedProject() {
  const { selectedProject, handleDeleteProject, projectSelectState } =
    useContext(ProjectContext);

  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "2-digit",
      month: "short",
      day: "numeric",
    }
  );

  const projectTasks = projectSelectState.tasks.filter(
    (task) => task.projectId === selectedProject.id
  );

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            className="text-stone-600 hover:text-stone-950"
            onClick={handleDeleteProject}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
      <Tasks tasks={projectTasks} />
    </div>
  );
}
