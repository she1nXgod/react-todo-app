import { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext.js';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <main id="tasks" className="tasks-list">
      {tasks.map(({ id, title, completed, editMode }) => (
        <TaskItem key={id} title={title} id={id} completed={completed} editMode={editMode} />
      ))}
    </main>
  );
};

export default TaskList;
