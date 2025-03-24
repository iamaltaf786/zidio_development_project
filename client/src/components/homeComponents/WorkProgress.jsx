// Progress bars for ongoing work.

const WorkProgress = () => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-3">Work Progress</h3>
      <div className="mb-3">
        <h4>Dashboard Design - 90% Complete</h4>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: "90%" }}
          ></div>
        </div>
      </div>
      <div>
        <h4>App UI UX Design - 30% Complete</h4>
        <div className="w-full bg-gray-300 rounded-full h-2">
          <div
            className="bg-green-500 h-2 rounded-full"
            style={{ width: "30%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default WorkProgress;
