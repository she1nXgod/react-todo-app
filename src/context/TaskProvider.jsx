import { TaskContext } from './TaskContext.js';
import useTasks from '../hooks/useTasks.js';
import useTasksFilter from '../hooks/useTasksFilter.js';

export const TaskProvider = ({ children }) => {
  const { tasks, addTask, updateCompleted, deleteTask, updateTitle, toggleEditMode } = useTasks();

  const { currentFilter, onFilterChange, filteredTasks } = useTasksFilter(tasks);

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks,
        currentFilter,
        onFilterChange,
        filteredTasks,
        addTask,
        updateCompleted,
        deleteTask,
        updateTitle,
        toggleEditMode,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
