import { useContext, useState, useRef, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext.js';
import Button from './Button.jsx';
import { ICONS } from '../assets/icons/index.js';

const TaskEdit = ({ id, title, completed }) => {
  const [newTitle, setNewTitle] = useState(title);
  const { updateCompleted, toggleEditMode, updateTitle } = useContext(TaskContext);
  const inputElement = useRef(null);

  useEffect(() => inputElement.current.focus(), []);

  return (
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
        ref={inputElement}
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
};

export default TaskEdit;
