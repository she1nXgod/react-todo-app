import { useState } from 'react';

const useTasksFilter = (tasks) => {
  const [currentFilter, onFilterChange] = useState('All');

  const tasksByFilter = {
    All: tasks,
    Active: tasks.filter(({ completed }) => !completed),
    Completed: tasks.filter(({ completed }) => completed),
  };

  const filteredTasks = tasksByFilter[currentFilter];

  return { currentFilter, onFilterChange, filteredTasks };
};

export default useTasksFilter;
