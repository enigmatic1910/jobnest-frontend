import React from "react";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Find Your Next{" "}
            <span className="text-blue-400">Dream Job</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Discover opportunities from top companies, save jobs,
            and apply when you’re ready.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/jobs")}
              className="px-8 h-12 bg-blue-600 rounded-lg hover:bg-blue-500 transition font-medium"
            >
              Browse Jobs
            </button>

            <button
              onClick={() => navigate("/saved-jobs")}
              className="px-8 h-12 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition font-medium"
            >
              Saved Jobs
            </button>
          </div>

          <div className="mt-14 flex gap-10">
            <div>
              <p className="text-2xl font-bold">10k+</p>
              <p className="text-gray-400 text-sm">Jobs Listed</p>
            </div>
            <div>
              <p className="text-2xl font-bold">2k+</p>
              <p className="text-gray-400 text-sm">Companies</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-gray-400 text-sm">Free Platform</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex justify-center relative">
          <div className="relative w-full max-w-md">

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg">
                Software Engineer
              </h3>
              <p className="text-gray-400 mt-1">
                Tech Corp • Remote
              </p>
              <button className="mt-4 px-4 py-2 bg-black rounded-md text-sm hover:bg-gray-700 transition">
                View Job
              </button>
            </div>

            <div className="absolute -top-12 -right-12 bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl w-72">
              <h3 className="font-semibold text-lg">
                Data Scientist
              </h3>
              <p className="text-gray-400 mt-1">
                Data Inc • Full Time
              </p>
              <button className="mt-4 px-4 py-2 bg-black rounded-md text-sm hover:bg-gray-700 transition">
                View Job
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
