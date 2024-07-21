// Components/TaskCard.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp, MessageSquare, Trash2, SquareGanttChart } from 'lucide-react';

const TaskCard = ({ title, deleteButton, action, vote, msg, Status }) => {
    return (
        <div className='text-white text-4xl border rounded-2xl bg-purple-300 backdrop-grayscale-0 border-r-2 p-2 m-2'>
            <div className='font-semibold text-white'>
                {title} !!
            </div>
            <div className='flex justify-between py-2 text-gray-800'>
                <div className='flex gap-3 justify-center items-center'>
                    <div>{action}</div>
                    <div><SquareGanttChart /></div>
                </div>
               
                <div>{deleteButton}<Trash2 /></div>
                <div>{vote}<ThumbsUp /></div>
                <div>{msg}<MessageSquare /></div>
                <div>{Status}</div>
            </div>
        </div>
    );
}

TaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    deleteButton: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired,
    vote: PropTypes.string.isRequired,
    msg: PropTypes.string, // Optional
    Status: PropTypes.string, // Optional
};

export default TaskCard;
