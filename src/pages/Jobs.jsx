import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import JobCard from "../components/JobCard";

function Jobs() {
  const navigate = useNavigate();

  const { list } = useSelector((state) => state.jobs);

  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  // Filter jobs
  const filteredJobs = list.filter((job) => {
    return (
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (companyFilter === "" || job.company === companyFilter)
    );
  });

  // Unique companies
  const companies = [...new Set(list.map((job) => job.company))];

  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <h1 className="text-4xl font-bold">Jobs Portal</h1>
            <p className="text-gray-400 mt-2">
              Explore roles from top companies and save your favorites.
            </p>
          </div>

          <button
            onClick={() => navigate("/saved-jobs")}
            className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-lg transition font-medium"
          >
            Saved Jobs
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <input
            type="text"
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />

          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="">All Companies</option>

            {companies.map((company) => (
              <option key={company} value={company}>
                {company}
              </option>
            ))}
          </select>
        </div>

        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No jobs found.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredJobs.map((job) => (
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

export default Jobs;