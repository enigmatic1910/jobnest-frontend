import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const showHomeLink = pathname !== "/home" && pathname !== "/";

  return (
    <nav className="w-full border-b border-gray-800 bg-black/80 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <img className="h-12 w-auto object-contain" src="/Logo-removebg-preview.png" alt="JobNest logo" />

        <div className="hidden md:flex gap-8 items-center text-sm font-medium">
          {showHomeLink && (
            <Link className="text-gray-300 hover:text-white transition" to="/home">
              Home
            </Link>
          )}
          <Link className="text-gray-300 hover:text-white transition" to="/jobs">
            Jobs
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition"
            to="/saved-jobs"
          >
            Saved
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition"
            to="/profile"
          >
            Profile
          </Link>
        </div>

        <div className="hidden md:flex gap-3">
          <Link to="/login" className="px-5 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition inline-block">
            Login
          </Link>
          <Link to="/signup" className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-medium inline-block">
            Signup
          </Link>
        </div>

        <button
          className="md:hidden text-2xl text-gray-300 hover:text-white transition"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 px-6 py-6 flex flex-col gap-4 text-sm">
          {showHomeLink && (
            <Link className="text-gray-300 hover:text-white transition" to="/home">
              Home
            </Link>
          )}
          <Link className="text-gray-300 hover:text-white transition" to="/jobs">
            Jobs
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition"
            to="/saved-jobs"
          >
            Saved Jobs
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition"
            to="/profile"
          >
            Profile
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition"
            to="/login"
          >
            Login
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition"
            to="/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
