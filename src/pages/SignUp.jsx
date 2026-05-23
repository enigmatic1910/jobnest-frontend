import React from "react";
import { useNavigate, Link } from "react-router-dom";

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

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedName || !trimmedEmail || !password) {
      setError("Please fill all fields.");
      return;
    }

    const users = getUsers();
    const exists = users.some((user) => user.email === trimmedEmail);

    if (exists) {
      setError("An account with this email already exists.");
      return;
    }

    const newUser = {
      name: trimmedName,
      email: trimmedEmail,
      password,
    };

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    localStorage.setItem(AUTH_KEY, "true");
    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify({ name: newUser.name, email: newUser.email })
    );

    navigate("/home");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 px-6">
        <div className="hidden lg:flex items-center justify-center">
          <div className="max-w-md">
            <p className="text-blue-400 font-medium mb-3">Join JobNest</p>
            <h2 className="text-5xl font-bold leading-tight mb-6">
              Start Building Your Career ✨
            </h2>
            <p className="text-gray-400 text-lg">
              Discover amazing opportunities, save jobs, and connect with top companies worldwide.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-400 mb-6">
              Sign up and begin your journey with JobNest
            </p>

            {error && (
              <div className="mb-4 rounded-lg border border-red-600 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

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
                Create Account
              </button>
            </form>

            <p className="text-gray-400 text-sm text-center mt-6">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;