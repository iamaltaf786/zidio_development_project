// Displays total tasks, in-progress, pending, and completed tasks here

const TaskOverview = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-blue-200 p-4 rounded-lg text-center">
        <h3 className="text-xl font-bold">1220</h3>
        <p>Total Tasks</p>
      </div>
      <div className="bg-green-200 p-4 rounded-lg text-center">
        <h3 className="text-xl font-bold">07</h3>
        <p>In Progress</p>
      </div>
      <div className="bg-red-200 p-4 rounded-lg text-center">
        <h3 className="text-xl font-bold">43</h3>
        <p>Pending</p>
      </div>
      <div className="bg-gray-200 p-4 rounded-lg text-center">
        <h3 className="text-xl font-bold">1550</h3>
        <p>Completed</p>
      </div>
    </div>
  );
};

export default TaskOverview;
