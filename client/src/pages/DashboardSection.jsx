import Sidebar from "../components/homeComponents/Sidebar";
import SearchBar from "../components/homeComponents/SearchBar";
import TaskOverview from "../components/homeComponents/TaskOverview";
import TaskGraph from "../components/homeComponents/TaskGraph";
import TaskCalendar from "../components/homeComponents/Calendar";
import WorkProgress from "../components/homeComponents/WorkProgress";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-5">
        <SearchBar />
        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-2">
            <TaskOverview />
            <TaskGraph />
            <WorkProgress />
          </div>
          <TaskCalendar />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
