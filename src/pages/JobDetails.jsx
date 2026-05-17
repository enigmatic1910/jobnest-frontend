import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    MapPin,
    Briefcase,
    IndianRupee,
    Clock3,
    Building2,
} from "lucide-react";

function JobDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const job = useSelector((state) =>
        state.jobs.list.find((j) => j.id === Number(id))
    );

    if (!job) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Job Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-10">

            <div className="max-w-6xl mx-auto">

                <button
                    onClick={() => navigate("/jobs")}
                    className="mb-8 px-5 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                    ← Back to Jobs
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 bg-gray-800 border border-gray-700 rounded-2xl p-8">

                        <div className="flex items-center justify-between flex-wrap gap-4">

                            <div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">
                  Full Time
                </span>

                                <h1 className="text-4xl font-bold mt-4">
                                    {job.title}
                                </h1>

                                <p className="text-gray-400 mt-2 text-lg">
                                    {job.company}
                                </p>
                            </div>

                            <button className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-medium">
                                Apply Now
                            </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

                            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <MapPin size={20} />
                                    <span>Location</span>
                                </div>

                                <p className="mt-3 text-lg font-medium">
                                    {job.location}
                                </p>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <IndianRupee size={20} />
                                    <span>Salary</span>
                                </div>

                                <p className="mt-3 text-lg font-medium">
                                    {job.salary}
                                </p>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Briefcase size={20} />
                                    <span>Experience</span>
                                </div>

                                <p className="mt-3 text-lg font-medium">
                                    2+ Years
                                </p>
                            </div>

                            <div className="bg-gray-900 rounded-xl p-5 border border-gray-700">
                                <div className="flex items-center gap-3 text-gray-400">
                                    <Clock3 size={20} />
                                    <span>Job Type</span>
                                </div>

                                <p className="mt-3 text-lg font-medium">
                                    Remote
                                </p>
                            </div>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-4">
                                Job Description
                            </h2>

                            <p className="text-gray-400 leading-8">
                                We are looking for a passionate and talented{" "}
                                {job.title} to join our growing team at{" "}
                                {job.company}. You will work on modern web
                                technologies, collaborate with cross-functional
                                teams, and help build scalable and high-quality
                                applications.
                            </p>

                            <p className="text-gray-400 leading-8 mt-5">
                                The ideal candidate should have strong
                                problem-solving skills, good communication,
                                and experience working with modern frontend
                                and backend technologies.
                            </p>
                        </div>

                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-4">
                                Requirements
                            </h2>

                            <ul className="space-y-3 text-gray-400">
                                <li>• Strong knowledge of JavaScript and React</li>
                                <li>• Understanding of REST APIs</li>
                                <li>• Experience with Git and GitHub</li>
                                <li>• Good problem-solving skills</li>
                                <li>• Team collaboration and communication</li>
                            </ul>
                        </div>
                    </div>

                    <div className="space-y-6">

                        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6">

                            <div className="flex items-center gap-3 mb-6">
                                <Building2 className="text-blue-400" />
                                <h2 className="text-xl font-semibold">
                                    Company Info
                                </h2>
                            </div>

                            <div className="space-y-5">

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Company
                                    </p>

                                    <p className="mt-1 font-medium">
                                        {job.company}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Industry
                                    </p>

                                    <p className="mt-1 font-medium">
                                        Information Technology
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Employees
                                    </p>

                                    <p className="mt-1 font-medium">
                                        5000+
                                    </p>
                                </div>

                                <div>
                                    <p className="text-gray-500 text-sm">
                                        Headquarters
                                    </p>

                                    <p className="mt-1 font-medium">
                                        India
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-600 rounded-2xl p-6">
                            <h2 className="text-2xl font-bold">
                                Ready to Apply?
                            </h2>

                            <p className="mt-3 text-blue-100">
                                Join thousands of professionals building
                                amazing careers with JobNest.
                            </p>

                            <button className="mt-6 w-full py-3 rounded-xl bg-white text-black font-semibold hover:bg-gray-200 transition">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobDetails;