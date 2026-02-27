import { useState } from 'react';

const useTasksLocalStorage = () => {
  const [savedTasks, setSavedTasks] = useState(() => {
    const dataTasks = localStorage.getItem('tasks');
    const parseDataTasks = JSON.parse(dataTasks).map((task) => ({ ...task, editMode: false }));
    return dataTasks ? parseDataTasks : null;
  });

  const saveTasks = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    setSavedTasks(tasks);
  };

  return { savedTasks, saveTasks };
};

export default useTasksLocalStorage;
