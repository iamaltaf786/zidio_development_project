import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import AuthLayout from "./pages/AuthLayout.jsx";
import Home from "./pages/Home.jsx";
import { DateProvider } from "./context/DateContext.jsx";

function App() {
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
        </Routes>
      </DateProvider>
    </>
  );
}

export default App;
