import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateCompleted, deleteTask, toggleEditMode, updateTitle }) => {
  return (
    <main id="tasks" className="tasks-list">
      {tasks.map(({ id, title, completed, editMode }) => (
        <TaskItem
          key={id}
          title={title}
          id={id}
          completed={completed}
          editMode={editMode}
          updateCompleted={updateCompleted}
          deleteTask={deleteTask}
          toggleEditMode={toggleEditMode}
          updateTitle={updateTitle}
        />
      ))}
    </main>
  );
};

export default TaskList;
