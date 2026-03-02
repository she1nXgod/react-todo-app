import { useState, useEffect } from 'react';
import useTasksLocalStorage from './useTasksLocalStorage';
import toast from 'react-hot-toast';

const useTasks = () => {
  const { savedTasks, saveTasks } = useTasksLocalStorage();
  const [tasks, setTasks] = useState(savedTasks ?? []);

  useEffect(() => saveTasks(tasks), [tasks, saveTasks]);

  const addTask = (title) => {
    setTasks([{ id: crypto.randomUUID(), title: title, completed: false, editMode: false }, ...tasks]);
    toast.success('Task created successfully');
  };

  const updateCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    toast('Task deleted', { icon: '🗑️' });
  };

  const toggleEditMode = (id) =>
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, editMode: !task.editMode } : task)),
    );

  const updateTitle = (id, newTitle) => {
    if (!newTitle.trim()) {
      toast.error('Please enter a task title');
      return;
    }

    setTasks((prevTasks) => prevTasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
    toggleEditMode(id);
    toast('Task updated', { icon: '✏️' });
  };

  return { tasks, addTask, updateCompleted, deleteTask, updateTitle, toggleEditMode };
};

export default useTasks;
