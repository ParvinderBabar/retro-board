// Components/PerformTaskList.jsx
// import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import TaskCard from './TaskCard.jsx';

const PerformTaskList = ({ tasks }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          title={task.title}
          deleteButton={task.delete}
          like={task.comment}
          vote={task.vote}
          status={task.Status}
        />
      ))}
    </>
  );
};

// Add PropTypes validation
PerformTaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      vote: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
      delete: PropTypes.string.isRequired,
      Status: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PerformTaskList;
