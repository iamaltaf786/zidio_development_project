import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <AuthLayout /> */}

      {/* Route to login/signup */}
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Route>

        {/* Route to Home */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
