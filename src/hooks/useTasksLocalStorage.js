import { useState } from 'react';

const useTasksLocalStorage = () => {
  const [savedTasks, setSavedTasks] = useState(() => {
    const dataTasks = localStorage.getItem('tasks');
    const parsed = dataTasks ? JSON.parse(dataTasks) : [];
    return parsed.map((task) => ({ ...task, editMode: false }));
  });

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setSavedTasks(tasks);
  };

  return { savedTasks, saveTasks };
};

export default useTasksLocalStorage;
