const Item = ({ id, title, completed, updateCompleted }) => {
  return (
    <div className="task d-flex align-items-center gap-3 mb-4 p-1" data-task-id={id}>
      <input
        type="checkbox"
        checked={completed}
        className="checkbox-task flex-shrink-0"
        onChange={() => updateCompleted(id)}
      />
      <p className="m-0 w-100 text-break task-title">{title}</p>
      <button type="button" className="btn btn-edit-task" data-btn="edit-task" aria-label="edit task">
        <img src="/icons/edit.svg" alt="edit task" className="icon" />
      </button>
      <button type="button" className="btn btn-delete-task" data-btn="delete-task" aria-label="delete task">
        <img src="/icons/trash.svg" alt="delete task" className="icon" />
      </button>
    </div>
  );
};

export default Item;
