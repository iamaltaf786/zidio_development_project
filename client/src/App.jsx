import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import { DateProvider } from "./context/DateContext.jsx";
import TaskList from "./components/tempFolders/TaskList.jsx";
import AddTaskForm from "./components/tempFolders/AddTaskForm.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", status: "completed" },
    { id: 2, title: "Task 2", status: "pending" },
    { id: 3, title: "Task 3", status: "completed" },
    { id: 4, title: "Task 4", status: "pending" },
  ]);
  return (
    <>
      {/* <Home /> */}
      {/* <AuthLayout /> */}
      <DateProvider>
        {/* Route to login/signup */}
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
          </Route>

          {/* Route to Home */}
          <Route path="/home" element={<Home />} />
          <Route path="/allProjects" element={<TaskList tasks={tasks} />} />
          <Route
            path="/addTask"
            element={<AddTaskForm setTasks={setTasks} />}
          />
        </Routes>
      </DateProvider>
    </>
  );
}

export default App;
