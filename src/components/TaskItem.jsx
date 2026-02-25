import { useState } from 'react';

const Item = ({
  id,
  title,
  completed,
  editMode,
  updateCompleted,
  deleteTask,
  toggleEditMode,
  updateTitle,
}) => {
  const [newTitle, setNewTitle] = useState(title);

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
        data-edit-input
        autoComplete="off"
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-confirm-edit"
        data-btn="confirm-edit"
        aria-label="confirm edit"
      >
        <img src="/icons/confirm.svg" alt="confirm edit" className="icon" />
      </button>
      <button
        type="button"
        className="btn btn-cancel-edit"
        data-btn="cancel-edit"
        aria-label="cancel edit"
        onClick={() => {
          toggleEditMode(id);
          setNewTitle(title);
        }}
      >
        <img src="/icons/cancel.svg" alt="cancel edit" className="icon" />
      </button>
    </form>
  );
  const normalContent = (
    <div className="task d-flex align-items-center gap-3 mb-4 p-1" data-task-id={id}>
      <input
        type="checkbox"
        checked={completed}
        className="checkbox-task flex-shrink-0"
        onChange={() => updateCompleted(id)}
      />
      <p className="m-0 w-100 text-break task-title">{title}</p>
      <button
        type="button"
        className="btn btn-edit-task"
        data-btn="edit-task"
        aria-label="edit task"
        onClick={() => toggleEditMode(id)}
      >
        <img src="/icons/edit.svg" alt="edit task" className="icon" />
      </button>
      <button
        type="button"
        className="btn btn-delete-task"
        data-btn="delete-task"
        aria-label="delete task"
        onClick={() => deleteTask(id)}
      >
        <img src="/icons/trash.svg" alt="delete task" className="icon" />
      </button>
    </div>
  );

  return <>{editMode ? editContent : normalContent}</>;
};

export default Item;
