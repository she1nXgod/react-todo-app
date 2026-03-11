import { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext.js';
import Button from './Button.jsx';
import { ICONS } from '../assets/icons/index.js';
import { motion } from 'motion/react';

const Item = ({ id, title, completed, editMode }) => {
  const [newTitle, setNewTitle] = useState(title);
  const { updateCompleted, deleteTask, toggleEditMode, updateTitle } = useContext(TaskContext);

  const normalContent = (
    <motion.div
      key={id}
      layout
      initial={{ x: 30, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -30, opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="task d-flex align-items-center gap-3 mb-4 p-1"
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
        className="btn-edit-task"
        aria-label="edit task"
        onClick={(e) => {
          toggleEditMode(id);
          e.stopPropagation();
        }}
      >
        <img src={ICONS.edit} alt="" className="icon" />
      </Button>
      <Button
        className="btn-delete-task"
        aria-label="delete task"
        onClick={(e) => {
          deleteTask(id);
          e.stopPropagation();
        }}
      >
        <img src={ICONS.trash} alt="" className="icon" />
      </Button>
    </motion.div>
  );

  const editContent = (
    <form
      className="task d-flex align-items-center gap-3 mb-4 p-1"
      data-task-id={id}
      onSubmit={() => updateTitle(id, newTitle)}
    >
      <input
        type="checkbox"
        checked={completed}
        className="checkbox-task flex-shrink-0"
        onChange={() => updateCompleted(id)}
      />
      <input
        type="text"
        value={newTitle}
        className="m-0 w-100 task-title form-control task-edit-input"
        autoComplete="off"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <Button type="submit" className="btn-confirm-edit" aria-label="confirm edit">
        <img src={ICONS.confirm} alt="" className="icon" />
      </Button>
      <Button
        className="btn-cancel-edit"
        aria-label="cancel edit"
        onClick={() => {
          toggleEditMode(id);
          setNewTitle(title);
        }}
      >
        <img src={ICONS.cancel} alt="" className="icon" />
      </Button>
    </form>
  );

  return <>{editMode ? editContent : normalContent}</>;
};

export default Item;
