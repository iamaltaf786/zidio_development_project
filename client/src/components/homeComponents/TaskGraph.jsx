// Graph to show tasks assigned this month.

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", tasks: 50 },
  { name: "Feb", tasks: 60 },
  { name: "Mar", tasks: 72 },
  { name: "Apr", tasks: 55 },
  { name: "May", tasks: 40 },
  { name: "Jun", tasks: 48 },
];

const TaskGraph = () => {
  return (
    <div className="p-5 bg-white shadow-lg rounded-lg">
      <h3 className="text-lg font-bold mb-3">Total Work</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="tasks"
            stroke="#FF6347"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskGraph;
