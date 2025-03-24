// left navbar with logged in info

import {
  FaTasks,
  FaProjectDiagram,
  FaHistory,
  FaInbox,
  FaCog,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-100 p-5 shadow-lg">
      <h2 className="text-xl font-bold mb-5">Mirha</h2>
      <ul>
        <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
          <FaTasks className="mr-2" /> Dashboard
        </li>
        <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
          <FaProjectDiagram className="mr-2" /> Tracking
        </li>
        <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
          <FaHistory className="mr-2" /> Work History
        </li>
        <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
          <FaInbox className="mr-2" /> Inbox
        </li>
        <li className="p-3 hover:bg-gray-200 cursor-pointer flex items-center">
          <FaCog className="mr-2" /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
