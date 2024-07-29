import PropTypes from 'prop-types';

const TaskCard = ({ id, title, comment, priority, status, onDelete,onUpdate, color }) => {
  const handleDelete = () => {
    onDelete(id);
    };
     const handleUpdate = () => {
    onUpdate(id);
  };

  return (
    <div className="bg-white p-2 mb-2 shadow-md border border-gray-300 rounded"> {/* Outer container */}
      <div
        className="p-4 rounded"
        style={{ backgroundColor: color || 'pink' }} // Use passed color or default to light gray
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700">{comment}</p>
        <p className="text-sm text-gray-600">Priority: {priority}</p>
        <p className="text-sm text-gray-600">Status: {status}</p>
        <div className="mt-2">
          <button onClick={handleDelete} className="bg-red-500 text-white p-1 rounded">
            Delete
                  </button>
                  <button onClick={handleUpdate} className="bg-yellow-200 text-white p-1 rounded">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

TaskCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  comment: PropTypes.string,
  priority: PropTypes.string,
  status: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
   onUpdate: PropTypes.func.isRequired,
  color: PropTypes.string, // New prop for color
};

export default TaskCard;
