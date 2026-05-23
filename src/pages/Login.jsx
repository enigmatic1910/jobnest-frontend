import React from "react";
import { Link, useNavigate } from "react-router-dom";

const USERS_KEY = "jobnest-users";
const AUTH_KEY = "jobnest-auth";
const CURRENT_USER_KEY = "jobnest-user";

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  } catch {
    return [];
  }
}

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    const trimmedEmail = email.trim().toLowerCase();
    const users = getUsers();

    const matchedUser = users.find(
      (user) => user.email === trimmedEmail && user.password === password
    );

    if (!matchedUser) {
      setError("Invalid email or password.");
      return;
    }

    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify({ name: matchedUser.name, email: matchedUser.email })
    );

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 px-6">

        <div className="hidden lg:flex items-center justify-center">
          <div className="max-w-md">
            <p className="text-blue-400 font-medium mb-3">Welcome to JobNest</p>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Find Your Dream Job Faster 🚀
            </h2>
            <p className="text-gray-400 text-lg">
              Explore thousands of jobs from top companies, save opportunities, and grow your career.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">

            <h1 className="text-3xl font-bold mb-2">Welcome Back 👋</h1>
            <p className="text-gray-400 mb-6">Login to continue exploring JobNest</p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-600 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium"
              >
                Login
              </button>
            </form>

            <p className="text-gray-400 text-sm text-center mt-6">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;