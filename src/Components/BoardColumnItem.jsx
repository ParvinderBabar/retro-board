import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Brush } from 'lucide-react'; // Import the Brush icon
import TaskCard from './TaskCard.jsx';
import { v4 as uuidv4 } from 'uuid';


const colors = [
  { name: 'Purple', hex: '#AE84E6' },
  { name: 'Yellow', hex: '#FBF084' },
  { name: 'Green', hex: '#B0F1AE' },
  { name: 'Blue', hex: '#A4E9FA' },
  { name: 'Pink', hex: '#F3C4E6' }
];

const defaultColumnColors = {
  'NotGoneWell': '#FBF084', // Yellow
  'Improved': '#B0F1AE', // Green
  'Kudos': '#A4E9FA', // Blue
};

const fallbackColor = '#d1d5db'; // Light gray or any default color

const BoardColumnItem = ({ column, tasks, addTask, deleteTask, updateColumnColor }) => {
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', comment: '', priority: 'low', status: column.status });
  const [isColorPickerOpen, setIsColorPickerOpen] = useState(false);
  const [columnColor, setColumnColor] = useState(column.bgColor || defaultColumnColors[column.status] || fallbackColor);

  useEffect(() => {
    // Update column color if column.bgColor changes
    setColumnColor(column.bgColor || defaultColumnColors[column.status] || fallbackColor);
  }, [column.bgColor, column.status]);

  const handleAddTask = () => {
    if (!newTask.title) return; // Ensure title is provided

    addTask(column.status, {
      // eslint-disable-next-line no-undef
      id: uuidv4(),
      ...newTask,
    });

    setNewTask({ title: '', comment: '', priority: 'low', status: column.status });
    setIsAddingTask(false);
  };

  const handleColorChange = (color) => {
    setColumnColor(color);
    updateColumnColor(column.status, color); // Notify parent component of color change
    setIsColorPickerOpen(false);
  };

  return (
    <div className="column-card-container text-black font-bold">
      <div className="column-card bg-white p-2 shadow-md border border-gray-300 rounded" style={{ backgroundColor: columnColor }}>
        <div className="column-header flex justify-between items-center p-2 border-b border-gray-300">
          <div className="flex items-center">
            <input
              type='text'
              value={column.name}
              readOnly
              className='p-2 text-lg bg-transparent border-none text-black font-bold'
            />
            <div className="relative ml-2">
              <Brush className="cursor-pointer text-pink-600" onClick={() => setIsColorPickerOpen(!isColorPickerOpen)} />
              {isColorPickerOpen && (
                <div className="absolute top-8 right-0 bg-white border border-gray-300 p-2 rounded shadow-md">
                  <div className="flex space-x-2">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className="cursor-pointer w-6 h-6 rounded-full"
                        onClick={() => handleColorChange(color.hex)}
                        style={{ backgroundColor: color.hex }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="column-body-list p-2 text-black font-bold">
          <div className="space-y-2 text-black font-bold">
            {tasks.map(task => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                comment={task.comment}
                priority={task.priority}
                status={task.status}
                onDelete={deleteTask}
                onUpdate={() => {}}
                color={columnColor} // Pass the column color to TaskCard
              />
            ))}
          </div>
          
          {isAddingTask ? (
            <div className='flex flex-col p-2 border border-gray-300 shadow-md bg-white text-black font-bold'>
              <input
                type='text'
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                placeholder='Task Title'
                className='p-2 mb-2 border border-gray-300 rounded'
              />
              <textarea
                value={newTask.comment}
                onChange={(e) => setNewTask({ ...newTask, comment: e.target.value })}
                placeholder='Task Description'
                className='p-2 mb-2 border border-gray-300 rounded'
              />
              <select
                value={newTask.priority}
                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                className='p-2 mb-2 border border-gray-300 rounded'
              >
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='high'>High</option>
              </select>
              <div className='flex'>
                <button onClick={handleAddTask} className='bg-green-500 text-white p-2 rounded mr-2'>Add Task</button>
                <button onClick={() => setIsAddingTask(false)} className='bg-gray-500 text-white p-2 rounded'>Cancel</button>
              </div>
            </div>
          ) : (
            <button
              className='bg-blue-500 text-white text-lg p-2 mt-4 w-full rounded'
              onClick={() => setIsAddingTask(true)}
            >
              + Add New Card
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

BoardColumnItem.propTypes = {
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    bgColor: PropTypes.string, // Optional prop for default color
  }).isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string,
    priority: PropTypes.string,
    status: PropTypes.string.isRequired,
  })).isRequired,
  addTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  updateColumnColor: PropTypes.func.isRequired, // New prop for color update
};

export default BoardColumnItem;
