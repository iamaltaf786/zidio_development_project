// Dashboard.jsx
import React, { useState } from "react";
// import TaskList from "../components/tempFolders/TaskList";
// import AddTaskForm from "../components/tempFolders/AddTaskForm";
import FilterTasks from "../components/tempFolders/FilterTasks";
import TaskStats from "../components/tempFolders/TaskStats";

const DashboardSection = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "completed" },
    { id: 2, title: "Task 2", status: "pending" },
    { id: 3, title: "Task 3", status: "completed" },
    { id: 4, title: "Task 4", status: "pending" },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <TaskStats tasks={tasks} />
      <FilterTasks />
      {/* <AddTaskForm setTasks={setTasks} /> */}
      {/* <TaskList tasks={tasks} /> */}
    </div>
  );
};

export default DashboardSection;
