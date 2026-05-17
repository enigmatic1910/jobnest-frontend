import React, { useRef } from "react";
import JobCard from "../components/JobCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

function FeaturedJobs() {
  const slider = useRef(null);

  const scrollLeft = () => {
    slider.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    slider.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section id="featured-jobs" className="max-w-7xl mx-auto px-6 mb-28">
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold mb-4">Featured Jobs</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Hand picked opportunities from top companies, curated just for you
        </p>
      </div>

      <div className="relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <div
          ref={slider}
          className="flex flex-nowrap gap-8 px-14 overflow-x-hidden"
        >
          <div className="min-w-75">
            <JobCard job={{ title: "Software Engineer", company: "Google", id: 1 }} />
          </div>
          <div className="min-w-75">
            <JobCard job={{ title: "Product Manager", company: "Apple", id: 2 }} />
          </div>
          <div className="min-w-75">
            <JobCard job={{ title: "Data Scientist", company: "Facebook", id: 3 }} />
          </div>
          <div className="min-w-75">
            <JobCard job={{ title: "UX Designer", company: "Amazon", id: 4 }} />
          </div>
          <div className="min-w-75">
            <JobCard job={{ title: "DevOps Engineer", company: "Netflix", id: 5 }} />
          </div>
          <div className="min-w-75">
            <JobCard job={{ title: "QA Engineer", company: "Microsoft", id: 6 }} />
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-gray-800 border border-gray-700 hover:bg-gray-700 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </section>
  );
}

export default FeaturedJobs;
