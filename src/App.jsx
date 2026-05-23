import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import SavedJobs from "./pages/SavedJobs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";

function App() {
    return (
        <div className="min-h-screen flex flex-col bg-gray-900 text-white">
            <Navbar />

            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/jobs" element={<RequireAuth><Jobs /></RequireAuth>} />
                    <Route path="/jobs/:id" element={<RequireAuth><JobDetails /></RequireAuth>} />
                    <Route path="/saved-jobs" element={<RequireAuth><SavedJobs /></RequireAuth>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;