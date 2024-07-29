import { useState } from 'react';
import PropTypes from 'prop-types';
import TaskCard from './TaskCard';
import { v4 as uuidv4 } from 'uuid';

const PerformTaskList = ({ initialTasks }) => {
    const [tasks, setTasks] = useState(initialTasks);

    const addTask = () => {
        const newTask = {
            id: uuidv4(), // Generating a unique ID for the new task
            title: "New Task",
            comment: "",
            vote: "",
            action: "",
            status: "New",
            priority: "low"
        };
        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div>
            {tasks.map(task => (
                <TaskCard
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    deleteTask={deleteTask}
                    action={task.action}
                    vote={task.vote}
                    comment={task.comment}
                    // status={task.status}
                    priority={task.priority}
                />
            ))}
            <button onClick={addTask} className='mt-4 p-2 bg-blue-500 text-white'>Add Task</button>
        </div>
    );
};

PerformTaskList.propTypes = {
    initialTasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            comment: PropTypes.string,
            vote: PropTypes.string,
            action: PropTypes.string,
            status: PropTypes.string.isRequired,
            priority: PropTypes.oneOf(['low', 'medium', 'high'])
        })
    ).isRequired,
};

export default PerformTaskList;
