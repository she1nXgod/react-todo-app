import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext.js';
import Button from './Button.jsx';
import { ICONS } from '../assets/icons/index.js';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const TaskView = ({ id, title, completed }) => {
  const { updateCompleted, toggleEditMode, deleteTask } = useContext(TaskContext);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id,
  });

  const styleDnd = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={styleDnd}
      className="task d-flex align-items-center gap-3 mb-4"
      data-task-id={id}
      onClick={() => updateCompleted(id)}
    >
      <input
        type="checkbox"
        checked={completed}
        className="checkbox-task flex-shrink-0"
        onChange={() => updateCompleted(id)}
        onClick={(e) => e.stopPropagation()}
      />
      <p className="m-0 w-100 text-break task-title">{title}</p>
      <Button
        className="btn-edit-task p-2"
        aria-label="edit task"
        onClick={(e) => {
          toggleEditMode(id);
          e.stopPropagation();
        }}
      >
        <img src={ICONS.edit} alt="" className="icon" />
      </Button>
      <Button
        className="btn-delete-task p-2"
        aria-label="delete task"
        onClick={(e) => {
          deleteTask(id);
          e.stopPropagation();
        }}
      >
        <img src={ICONS.trash} alt="" className="icon" />
      </Button>
      <div className="drag-handle" onClick={(e) => e.stopPropagation()}>
        <img src={ICONS.dragHandle} alt="" className="icon" />
      </div>
    </div>
  );
};

export default TaskView;
