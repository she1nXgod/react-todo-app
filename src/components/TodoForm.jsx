import { useState, useRef, useContext } from 'react';
import TaskFilter from './TaskFilter';
import { TaskContext } from '../context/TaskContext.js';
import toast from 'react-hot-toast';
import Button from './Button.jsx';
import { ICONS } from '../assets/icons/index.js';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const inputElement = useRef(null);
  const { addTask } = useContext(TaskContext);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Please enter a task title');
      setTitle('');
      inputElement.current.focus();
      return;
    }

    addTask(title);
    setTitle('');
    inputElement.current.focus();
  };

  return (
    <form id="task-form" className="row pb-3 pb-lg-4" onSubmit={handleFormSubmit}>
      <TaskFilter />
      <div className="col">
        <input
          type="text"
          value={title}
          ref={inputElement}
          className="form-control task-entry-form"
          placeholder="Add new task"
          aria-label="add task title"
          autoComplete="off"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="col-auto">
        <Button type="submit" className="task-add-btn" aria-label="add task">
          <img src={ICONS.addTask} alt="" className="icon" />
        </Button>
      </div>
    </form>
  );
};

export default TodoForm;
