// Components/TaskCard.jsx
// import React from 'react';
import PropTypes from 'prop-types';
import { ThumbsUp, MessageSquare, Trash2, SquareGanttChart } from 'lucide-react';

const TaskCard = ({ title, deleteButton, action, vote, msg, Status,priority }) => {
    return (
        <div className='text-white text-4xl border backdrop-grayscale-0 border-r-2 px-2 m-2 w-50 '>
            <div className='text-base font-base py-2  text-black' >
                {title} !!
            </div>
            <div className='flex justify-between py-2 text-black w-50  gap-4'>
               
                    <div>{action}</div>
                    <div><SquareGanttChart /></div>
                <div>{deleteButton}<Trash2 /></div>
                <div>{vote}<ThumbsUp /></div>
                <div>{msg}<MessageSquare /></div>
                <div>{Status}</div>
                <div>{priority}</div>
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
    priority:PropTypes.string
};

export default TaskCard;
