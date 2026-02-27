import { useState, useEffect } from 'react';
import useTasksLocalStorage from './useTasksLocalStorage';

const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStorage();
  const [tasks, setTasks] = useState(savedTasks ?? []);

  useEffect(() => saveTasks(tasks), [tasks, saveTasks]);

  const addTask = (title) =>
    setTasks([{ id: crypto.randomUUID(), title: title, completed: false, editMode: false }, ...tasks]);

  const updateCompleted = (id) =>
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );

  const deleteTask = (id) => setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));

  const toggleEditMode = (id) =>
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, editMode: !task.editMode } : task)),
    );

  const updateTitle = (id, newTitle) => {
    toggleEditMode(id);
    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  return { tasks, addTask, updateCompleted, deleteTask, updateTitle, toggleEditMode };
};

export default useTasks;
