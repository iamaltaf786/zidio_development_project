import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/login`,
        {
          username,
          password,
        }
      );

      // Store the token in local storage or context
      sessionStorage.setItem("token", response.data.token);

      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "Login failed. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Google OAuth integration still remains...;)
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-[555px] bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-[450px] h-[500px] flex flex-col justify-between">
          <h2 className="text-2xl font-semibold text-center text-gray-700 mt-6">
            Already Have An Account?
          </h2>

          {errorMessage && (
            <p className="text-red-500 text-center mb-4">{errorMessage}</p>
          )}

          <form
            onSubmit={handleLogin}
            className="flex flex-col flex-grow justify-between"
          >
            <div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2">
                  Username: *
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 text-sm mb-2">
                  Password: *
                </label>
                <input
                  type="password"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className={`w-full bg-blue-500 text-white p-2 rounded-lg transition cursor-pointer ${
                  loading
                    ? "opacity-50 sursor-not-allowed"
                    : "hover:bg-blue-600"
                }`}
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>

            {/* Connect with Google Button */}
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm mb-2">Or</p>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 border border-gray-400 p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition cursor-pointer"
              >
                <img
                  src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                  alt="Google"
                  className="w-10 h-10"
                />
                Continue with Google
              </button>
            </div>

            <p className="text-sm text-center text-gray-600 mt-4">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-500 hover:underline">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
