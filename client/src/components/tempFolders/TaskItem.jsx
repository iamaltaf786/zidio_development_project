// TaskItem.jsx
import React from 'react';

const TaskItem = ({ task }) => {
    return (
        <div className={`flex justify-between items-center p-4 border-b ${task.status === 'completed' ? 'bg-green-100' : 'bg-red-100'}`}>
            <div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-gray-600">{task.status}</p>
            </div>
            <button className="text-blue-500 hover:underline">Edit</button>
        </div>
    );
};

export default TaskItem;