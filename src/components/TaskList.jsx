import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateCompleted, deleteTask }) => {
  return (
    <main id="tasks" className="tasks-list">
      {tasks.map(({ id, title, completed }) => (
        <TaskItem
          key={id}
          title={title}
          id={id}
          completed={completed}
          updateCompleted={updateCompleted}
          deleteTask={deleteTask}
        />
      ))}
    </main>
  );
};

export default TaskList;
