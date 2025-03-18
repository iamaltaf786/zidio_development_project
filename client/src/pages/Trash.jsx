
// DashboardSection.jsx code 

import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { FaTasks, FaBell, FaPlus, FaFileExport } from "react-icons/fa";

const initialTasks = [
  { id: "1", title: "Design Homepage", status: "To Do" },
  { id: "2", title: "API Integration", status: "In Progress" },
  { id: "3", title: "Testing & Debugging", status: "Completed" },
];

const columns = ["To Do", "In Progress", "Completed"];

function DashboardSection() {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = columns[result.destination.droppableId];
    updatedTasks.splice(result.destination.index, 0, movedTask);
    setTasks(updatedTasks);
  };

  return (
    <>
      <div className="p-6">
        {/* Task Overview & Quick Actions */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 flex items-center justify-between bg-white shadow-md rounded-lg">
            <FaTasks className="text-3xl text-blue-500" />
            <div>
              <p className="text-gray-600">Total Tasks</p>
              <h2 className="text-xl font-bold">{tasks.length}</h2>
            </div>
          </div>
          <div className="p-4 flex items-center justify-between bg-white shadow-md rounded-lg">
            <FaBell className="text-3xl text-yellow-500" />
            <div>
              <p className="text-gray-600">Upcoming Deadlines</p>
              <h2 className="text-xl font-bold">2</h2>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="bg-blue-500 text-white flex items-center px-4 py-2 rounded-md shadow-md">
              <FaPlus className="mr-2" /> Add Task
            </button>
            <button className="bg-green-500 text-white flex items-center px-4 py-2 rounded-md shadow-md">
              <FaFileExport className="mr-2" /> Generate Report
            </button>
          </div>
        </div>

        {/* Kanban Board */}
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-3 gap-4">
            {columns.map((column, colIndex) => (
              <Droppable key={column} droppableId={String(colIndex)}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="p-4 bg-gray-100 rounded-lg min-h-[200px]"
                  >
                    <h3 className="text-lg font-bold mb-2">{column}</h3>
                    {tasks
                      .filter((task) => task.status === column)
                      .map((task, index) => (
                        <Draggable
                          key={task.id}
                          draggableId={task.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="p-3 bg-white rounded-md shadow-md mb-2"
                            >
                              {task.title}
                            </div>
                          )}
                        </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>
      </div>
    </>
  );
}

export default DashboardSection;
