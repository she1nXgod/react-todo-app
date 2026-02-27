import { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { TaskContext } from '../context/TaskContext.js';

const TaskFilter = () => {
  const { currentFilter, onFilterChange } = useContext(TaskContext);
  return (
    <DropdownButton id="dropdown-basic-button" className="col-auto custom-dropdown" title="">
      <Dropdown.Item href="#/all" active={currentFilter === 'All'} onClick={() => onFilterChange('All')}>
        All
      </Dropdown.Item>
      <Dropdown.Item
        href="#/active"
        active={currentFilter === 'Active'}
        onClick={() => onFilterChange('Active')}
      >
        Active
      </Dropdown.Item>
      <Dropdown.Item
        href="#/completed"
        active={currentFilter === 'Completed'}
        onClick={() => onFilterChange('Completed')}
      >
        Completed
      </Dropdown.Item>
    </DropdownButton>
  );
};

export default TaskFilter;
