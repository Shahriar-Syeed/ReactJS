import { createContext, useReducer } from "react";

export const ProjectContext = createContext({
  handleAddTask: () => {},
  handleDeleteTask: () => {},
});

function projectSelectReducer(state, action) {
  if (action.identifier === "ADD_TASK") {
    const taskId = Math.random();
    const newTask = {
      text: action.payload.textOfTask,
      projectId: state.selectedProjectId,
      id: taskId,
    };
    return {
      ...state,
      tasks: [...state.tasks, newTask],
    };
  }
  if (action.identifier === "DELETE_TASK") {
    return {
      ...state,
      tasks: state.tasks.filter((task) => task.id !== action.payload.id),
    };
  }
  if (action.identifier === "SELECT_PROJECT") {
    return {
      ...state,
      selectedProjectId: action.payload.id,
    };
  }
  if (action.identifier === "START_ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: null,
    };
  }
  if (action.identifier === "CANCEL_ADD_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
    };
  }
  if (action.identifier === "ADD_PROJECT") {
    const projectId = Math.random();
    const newProject = {
      ...action.payload.projectData,
      id: projectId,
    };

    return {
      ...state,
      selectedProjectId: undefined,
      projects: [...state.projects, newProject],
    };
  }
  if (action.identifier === "DELETE_PROJECT") {
    return {
      ...state,
      selectedProjectId: undefined,
      projects: state.projects.filter(
        (project) => project.id !== state.selectedProjectId
      ),
      tasks: state.tasks.filter(
        (task) => task.projectId !== state.selectedProjectId //extra
      ),
    };
  }

  return state;
}

export default function ProjectContextProvider({ children }) {
  const [projectSelectState, projectSelectDispatch] = useReducer(
    projectSelectReducer,
    {
      selectedProjectId: undefined,
      projects: [],
      tasks: [],
    }
  );

  function handleAddTask(textOfTask) {
    projectSelectDispatch({
      identifier: "ADD_TASK",
      payload: { textOfTask },
    });
  }
  function handleDeleteTask(id) {
    projectSelectDispatch({
      identifier: "DELETE_TASK",
      payload: { id },
    });
  }
  function handleSelectProject(id) {
    projectSelectDispatch({
      identifier: "SELECT_PROJECT",
      payload: { id },
    });
  }
  function handleStartAddProject() {
    projectSelectDispatch({
      identifier: "START_ADD_PROJECT",
    });
  }
  function handleCancelAddProject() {
    projectSelectDispatch({
      identifier: "CANCEL_ADD_PROJECT",
    });
  }
  function handleAddProject(projectData) {
    projectSelectDispatch({
      identifier: "ADD_PROJECT",
      payload: { projectData },
    });
  }
  function handleDeleteProject() {
    projectSelectDispatch({
      identifier: "DELETE_PROJECT",
    });
  }

  const selectedProject = projectSelectState.projects.find(
    (project) => project.id === projectSelectState.selectedProjectId
  );

  const ctxValue = {
    handleAddTask,
    handleDeleteTask,
    handleStartAddProject,
    projectSelectState,
    handleSelectProject,
    selectedProject,
    handleDeleteProject,
    handleAddProject,
    handleCancelAddProject,
  };
  return (
    <ProjectContext.Provider value={ctxValue}>
      {children}
    </ProjectContext.Provider>
  );
}
