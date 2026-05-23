import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const showHomeLink = pathname !== "/home" && pathname !== "/";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    function readAuth() {
      const auth = localStorage.getItem("jobnest-auth") === "true";
      const user = localStorage.getItem("jobnest-user");
      setIsLoggedIn(!!auth);
      try {
        setCurrentUser(user ? JSON.parse(user) : null);
      } catch {
        setCurrentUser(null);
      }
    }

    readAuth();

    const onStorage = (e) => {
      if (e.key === "jobnest-auth" || e.key === "jobnest-user") {
        readAuth();
      }
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  function handleLogout() {
    localStorage.removeItem("jobnest-auth");
    localStorage.removeItem("jobnest-user");
    setIsLoggedIn(false);
    setCurrentUser(null);
    navigate("/home");
  }

  return (
    <nav className="w-full border-b border-gray-800 bg-black/80 backdrop-blur text-white">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <img className="h-12 w-auto object-contain" src="/Logo-removebg-preview.png" alt="JobNest logo" />

        {isLoggedIn ? (
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
        ) : null}

        <div className="hidden md:flex gap-3 items-center">
          {isLoggedIn ? (
            <>
              {currentUser && currentUser.name ? (
                <Link to="/profile" className="px-4 py-2 rounded-lg text-sm text-gray-300 hover:text-white">
                  {currentUser.name}
                </Link>
              ) : null}
              <button onClick={handleLogout} className="px-5 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition inline-block">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-5 py-2 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 transition inline-block">
                Login
              </Link>
              <Link to="/signup" className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition font-medium inline-block">
                Signup
              </Link>
            </>
          )}
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
          {isLoggedIn ? (
            <>
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
              {currentUser && currentUser.name && (
                <Link className="text-gray-300 hover:text-white transition" to="/profile">
                  {currentUser.name}
                </Link>
              )}
              <button onClick={handleLogout} className="text-gray-300 hover:text-white transition text-left">
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
