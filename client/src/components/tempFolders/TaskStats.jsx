// TaskStats.jsx
import React from 'react';

const TaskStats = ({ tasks }) => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;

    return (
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold">Task Statistics</h2>
            <p className="text-gray-700">Total Tasks: <span className="font-bold">{totalTasks}</span></p>
            <p className="text-gray-700">Completed Tasks: <span className="font-bold">{completedTasks}</span></p>
        </div>
    );
};

export default TaskStats;