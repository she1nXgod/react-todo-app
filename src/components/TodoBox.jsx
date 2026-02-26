import { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
import TaskList from './TaskList';

const TodoBox = () => {
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

  const AddTask = (title) =>
    setTask([{ id: crypto.randomUUID(), title: title, completed: false, editMode: false }, ...tasks]);

  const updateCompletedTask = (id) =>
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

  console.log(tasks);
  return (
    <div className="root d-flex justify-content-center align-items-center min-vh-100">
      <div
        id="app-container"
        className="container todo-container max-w-50 px-3 pt-3 pb-2 px-md-4 pt-md-4 pb-md-2 px-lg-5 pt-lg-5 pb-lg-4"
      >
        <TodoForm addTask={AddTask} currentFilter={currentFilter} onFilterChange={onFilterChange} />
        <TaskList
          tasks={filteredTasks[currentFilter]}
          updateCompleted={updateCompletedTask}
          deleteTask={deleteTask}
          toggleEditMode={toggleEditMode}
          updateTitle={updateTitle}
        />
      </div>
    </div>
  );
};

export default TodoBox;
