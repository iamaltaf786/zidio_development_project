// FilterTasks.jsx
import React from 'react';

const FilterTasks = ({ onFilterChange }) => {
    return (
        <div className="filter-tasks">
            <select onChange={(e) => onFilterChange(e.target.value)}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
            </select>
        </div>
    );
};

export default FilterTasks;