import { useState } from 'react';
import TodoForm from './TodoForm';
import TaskList from './TaskList';

const TodoBox = () => {
  const [tasks, setTask] = useState([]);

  const AddTask = (title) => setTask([{ id: crypto.randomUUID(), title: title, completed: false }, ...tasks]);

  const updateCompletedTask = (id) =>
    setTask((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)),
    );

  const deleteTask = (id) => setTask((prevTasks) => prevTasks.filter((task) => task.id !== id));

  console.log(tasks);
  return (
    <div className="root d-flex justify-content-center align-items-center min-vh-100">
      <div
        id="app-container"
        className="container todo-container max-w-50 px-3 pt-3 pb-2 px-md-4 pt-md-4 pb-md-2 px-lg-5 pt-lg-5 pb-lg-4"
      >
        <TodoForm addTask={AddTask} />
        <TaskList tasks={tasks} updateCompleted={updateCompletedTask} deleteTask={deleteTask} />
      </div>
      <div
        id="notifications"
        className="notifications-list d-flex flex-column justify-content-end align-items-end px-3 py-2"
      ></div>
    </div>
  );
};

export default TodoBox;
