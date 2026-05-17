import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";

function SavedJobs() {
    const navigate = useNavigate();

    const savedJobs = useSelector(
        (state) => state.savedJobs.savedList
    );

    return (
        <section className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
                    <div>
                        <h1 className="text-4xl font-bold">Saved Jobs</h1>
                        <p className="text-gray-400 mt-2">
                            View all your bookmarked jobs here.
                        </p>
                    </div>

                    <button
                        onClick={() => navigate("/jobs")}
                        className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg transition font-medium"
                    >
                        Back to Jobs
                    </button>
                </div>

                {savedJobs.length === 0 ? (
                    <div className="flex flex-col items-center justify-center mt-24 text-center">
                        <h2 className="text-2xl font-semibold text-gray-300">
                            No Saved Jobs
                        </h2>
                        <p className="text-gray-500 mt-3">
                            You haven’t saved any jobs yet.
                        </p>
                        <button
                            onClick={() => navigate("/jobs")}
                            className="mt-6 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition font-medium"
                        >
                            Explore Jobs
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {savedJobs.map((job) => (
                            <div key={job.id} className="w-full">
                                <JobCard job={job} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default SavedJobs;