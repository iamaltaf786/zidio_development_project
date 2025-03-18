// AddTaskForm.jsx
import React, { useState } from 'react';

const AddTaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() === '') return; // Prevent adding empty tasks
        onAddTask({ id: Date.now(), title, description, status: 'pending' });
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Task</h2>
            <input
                type="text"
                placeholder="Task Title"
                className="w-full p-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <textarea
                placeholder="Task Description"
                className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
            />
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Add Task
            </button>
        </form>
    );
};

export default AddTaskForm;