import { useState, useEffect } from 'react';
import { TaskContext } from './TaskContext.js';

export const TaskProvider = ({ children }) => {
  const [tasks, setTask] = useState(() => {
    const localData = localStorage.getItem('tasks');
    return JSON.parse(localData).map((task) => ({ ...task, editMode: false })) || [];
  });
  const [currentFilter, onFilterChange] = useState('All');

  useEffect(() => localStorage.setItem('tasks', JSON.stringify(tasks)), [tasks]);

  const filteredTasks = {
    All: tasks,
    Active: tasks.filter(({ completed }) => !completed),
    Completed: tasks.filter(({ completed }) => completed),
  };

  const addTask = (title) =>
    setTask([{ id: crypto.randomUUID(), title: title, completed: false, editMode: false }, ...tasks]);

  const updateCompleted = (id) =>
    setTask((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );

  const deleteTask = (id) => setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

  const toggleEditMode = (id) =>
    setTask((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, editMode: !task.editMode } : task)),
    );

  const updateTitle = (id, newTitle) => {
    toggleEditMode(id);
    setTask((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks: filteredTasks[currentFilter],
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
