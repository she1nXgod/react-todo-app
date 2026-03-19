import { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../context/TaskContext.js';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <main id="tasks" className="tasks-list">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            id={task.id}
            completed={task.completed}
            editMode={task.editMode}
          />
        ))}
      </SortableContext>
    </main>
  );
};

export default TaskList;
