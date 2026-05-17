import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem("jobnest-auth", "true");

    navigate("/home");
  };

  return (
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-2 px-6">

          <div className="hidden lg:flex items-center justify-center">
            <div className="max-w-md">
              <p className="text-blue-400 font-medium mb-3">
                Join JobNest
              </p>

              <h2 className="text-5xl font-bold leading-tight mb-6">
                Start Building Your Career ✨
              </h2>

              <p className="text-gray-400 text-lg">
                Discover amazing opportunities, save jobs,
                and connect with top companies worldwide.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-2xl p-8 shadow-xl">

              <h1 className="text-3xl font-bold mb-2">
                Create Account
              </h1>

              <p className="text-gray-400 mb-6">
                Sign up and begin your journey with JobNest
              </p>

              <button className="w-full h-12 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-700 transition flex items-center justify-center mb-3">
                Sign up with Google
              </button>

              <button className="w-full h-12 rounded-lg bg-gray-900 border border-gray-700 hover:bg-gray-700 transition flex items-center justify-center mb-6">
                Sign up with Facebook
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="h-px bg-gray-700 flex-1" />
                <span className="text-gray-500 text-sm">OR</span>
                <div className="h-px bg-gray-700 flex-1" />
              </div>

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
                <Link
                    to="/login"
                    className="text-blue-400 hover:underline"
                >
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