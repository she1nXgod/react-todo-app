import { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext.js';
import { AnimatePresence } from 'motion/react';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <main id="tasks" className="tasks-list">
      <div style={{ overflow: 'hidden' }}>
        <AnimatePresence>
          {tasks.map(({ id, title, completed, editMode }) => (
            <TaskItem key={id} title={title} id={id} completed={completed} editMode={editMode} />
          ))}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default TaskList;
