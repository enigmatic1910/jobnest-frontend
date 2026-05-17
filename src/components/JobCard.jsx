import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Heart, MapPin } from "lucide-react";
import { removeJob, saveJob } from "../features/savedJobs/savedJobsSlice";

function JobCard({ job }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saved = useSelector((state) => state.savedJobs.savedList);

  const isSaved = saved.some(
      (savedJob) => savedJob.id === job.id
  );

  return (
      <div
          onClick={() => navigate(`/jobs/${job.id}`)}
          className="
        h-[320px]
        w-full
        bg-gray-800
        border
        border-gray-700
        rounded-2xl
        p-6
        flex
        flex-col
        justify-between
        cursor-pointer
        transition
        hover:-translate-y-1
        hover:shadow-xl
      "
      >
        {/* Top Content */}
        <div>
          {/* Top Row */}
          <div className="flex items-start justify-between">

          <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400">
            Remote
          </span>

            {/* Save Button */}
            <button
                onClick={(e) => {
                  e.stopPropagation();

                  isSaved
                      ? dispatch(removeJob(job.id))
                      : dispatch(saveJob(job));
                }}
                className={`transition ${
                    isSaved
                        ? "text-red-400"
                        : "text-gray-400 hover:text-red-400"
                }`}
            >
              <Heart
                  size={18}
                  fill={isSaved ? "currentColor" : "none"}
              />
            </button>
          </div>

          {/* Job Title */}
          <h2 className="mt-6 text-xl font-semibold hover:text-blue-400 transition line-clamp-2">
            {job.title}
          </h2>

          {/* Company */}
          <p className="mt-2 text-gray-400">
            {job.company}
          </p>

          {/* Location */}
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={14} />
            <span>{job.location}</span>
          </div>

          {/* Salary */}
          <p className="mt-3 text-green-400 font-medium">
            {job.salary}
          </p>
        </div>

        {/* Bottom Button */}
        <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/jobs/${job.id}`);
            }}
            className="
          mt-6
          px-4
          py-2
          rounded-lg
          bg-black
          hover:bg-gray-700
          transition
          text-sm
          font-medium
        "
        >
          View Details
        </button>
      </div>
  );
}

export default JobCard;