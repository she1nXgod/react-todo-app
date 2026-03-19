import TaskEdit from './TaskEdit.jsx';
import TaskView from './TaskView.jsx';

const TaskItem = ({ id, title, completed, editMode }) => {
  return (
    <>
      {editMode ? (
        <TaskEdit id={id} title={title} completed={completed} />
      ) : (
        <TaskView id={id} title={title} completed={completed} />
      )}
    </>
  );
};

export default TaskItem;
