import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <AuthLayout /> */}
      <Routes>
        <Route path="/" element={<Home />}>
          {/* <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
