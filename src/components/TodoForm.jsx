import { useState, useRef } from 'react';

const TodoForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const inputElement = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title);

    setTitle('');
    inputElement.current.focus();
  };

  return (
    <form id="task-form" className="row pb-2 pb-md-3 pb-lg-4" onSubmit={handleFormSubmit}>
      <div className="col">
        <input
          value={title}
          ref={inputElement}
          required={true}
          type="text"
          className="form-control task-entry-form"
          id="task-input"
          placeholder="Add new task"
          aria-label="add task title"
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <button
          type="submit"
          id="task-add-btn"
          className="btn btn-primary task-add-btn"
          aria-label="add task"
        >
          +
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
