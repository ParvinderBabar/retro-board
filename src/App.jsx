import { useState } from 'react';
import BoardColumnItem from './Components/BoardColumnItem'; // Ensure the path is correct

const initialColumns = [
  { id: 'column-1', name: 'What didn\'t go well?', color: 'bg-purple-900', bgColor: '#d1d5db', status: 'NotGoneWell', taskIds: [] },
  { id: 'column-2', name: 'What can be improved?', color: 'bg-yellow-400', bgColor: '#fef3c7', status: 'Improved', taskIds: [] },
  { id: 'column-3', name: 'Kudos', color: 'bg-green-500', bgColor: '#d1fae5', status: 'Kudos', taskIds: [] }
];

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState(initialColumns);

  const handleAddTask = (columnStatus, task) => {
    setTasks([...tasks, task]);
    setColumns(columns.map(column => 
      column.status === columnStatus ? { ...column, taskIds: [...column.taskIds, task.id] } : column
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
    setColumns(columns.map(column => ({
      ...column,
      taskIds: column.taskIds.filter(id => id !== taskId)
    })));
  };

  const handleUpdateTask = (taskId, updatedData) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, ...updatedData } : task
    ));
  };

  const handleUpdateColumnColor = (columnStatus, color) => {
    setColumns(columns.map(column => 
      column.status === columnStatus ? { ...column, bgColor: color } : column
    ));
  };

  return (
    <div className='flex'>
      <div className='w-1/5 h-screen bg-white p-4 shadow-lg'>
        <h2 className='text-2xl mb-4'>Retro-board</h2>
        <div className='bg-slate-400 p-2 mb-4 shadow-md'>
          <h2 className='text-xl'>Analytics</h2>
        </div>
        <div className='bg-slate-400 p-2 mb-4 shadow-md'>
          <h2 className='text-xl'>Dashboard</h2>
        </div>
        <div className='bg-slate-400 p-2 mb-4 shadow-md'>
          <h2 className='text-xl'>Action Items</h2>
        </div>
      </div>
      <div className='flex-1 p-4'>
        <h2 className='text-3xl mb-4'>Retro-board</h2>
        <div className='flex flex-wrap'>
          {columns.map((column) => (
            <BoardColumnItem
              key={column.id}
              column={column}
              tasks={tasks.filter(task => column.taskIds.includes(task.id))}
              addTask={handleAddTask}
              deleteTask={handleDeleteTask}
              updateTask={handleUpdateTask}
              updateColumnColor={handleUpdateColumnColor} // Pass handler to BoardColumnItem
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
