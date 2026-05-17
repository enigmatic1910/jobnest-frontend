import React from "react";

function Profile() {
  const initialProfile = {
    name: "John Doe",
    title: "Software Engineer",
    location: "San Francisco, CA",
    email: "john.doe@email.com",
    phone: "(555) 010-2048",
    status: "Open to work",
    about:
      "Frontend engineer with a focus on accessible, performant user interfaces. Enjoys building design systems, collaborating with product teams, and mentoring junior developers.",
    skills: "React, JavaScript, TypeScript, Tailwind, Redux",
    experience: [
      {
        role: "Senior Frontend Engineer",
        company: "Nova Labs",
        period: "2023 - Present",
        summary: "Leading UI development for the JobNest web platform.",
      },
      {
        role: "Frontend Engineer",
        company: "PixelWorks",
        period: "2020 - 2023",
        summary: "Built design systems and reusable React components.",
      },
    ],
    education: [
      {
        degree: "B.S. in Computer Science",
        school: "State University",
        period: "2016 - 2020",
      },
    ],
  };

  const [profile, setProfile] = React.useState(initialProfile);
  const [draft, setDraft] = React.useState(initialProfile);
  const [isEditing, setIsEditing] = React.useState(false);

  const skillsList = profile.skills
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);

  const handleEditToggle = () => {
    setDraft(profile);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setDraft(profile);
    setIsEditing(false);
  };

  const handleSave = () => {
    setProfile(draft);
    setIsEditing(false);
  };

  const updateDraftField = (key, value) => {
    setDraft((prev) => ({ ...prev, [key]: value }));
  };

  const updateExperience = (index, key, value) => {
    setDraft((prev) => {
      const updated = [...prev.experience];
      updated[index] = { ...updated[index], [key]: value };
      return { ...prev, experience: updated };
    });
  };

  const updateEducation = (index, key, value) => {
    setDraft((prev) => {
      const updated = [...prev.education];
      updated[index] = { ...updated[index], [key]: value };
      return { ...prev, education: updated };
    });
  };

  return (
    <section className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          <aside className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-gray-700 border border-gray-600 flex items-center justify-center text-2xl font-semibold text-gray-200">
                {profile.name
                  .split(" ")
                  .map((chunk) => chunk[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <h1 className="mt-4 text-2xl font-bold">{profile.name}</h1>
              <p className="text-gray-400">{profile.title}</p>
              <p className="mt-2 text-sm text-gray-500">{profile.location}</p>
            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-between">
                <span>Email</span>
                <span className="text-gray-400">{profile.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Phone</span>
                <span className="text-gray-400">{profile.phone}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="text-green-400">{profile.status}</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSave}
                    className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancel}
                    className="w-full rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-700 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleEditToggle}
                    className="w-full rounded-lg border border-gray-700 px-4 py-2 text-sm hover:bg-gray-700 transition"
                  >
                    Edit Profile
                  </button>
                  <button className="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium hover:bg-blue-500 transition">
                    Download CV
                  </button>
                </>
              )}
            </div>
          </aside>

          <div className="space-y-8">
            {isEditing && (
              <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
                <h2 className="text-lg font-semibold mb-4">Edit Profile</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Name</label>
                    <input
                      type="text"
                      value={draft.name}
                      onChange={(e) => updateDraftField("name", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Title</label>
                    <input
                      type="text"
                      value={draft.title}
                      onChange={(e) => updateDraftField("title", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Location</label>
                    <input
                      type="text"
                      value={draft.location}
                      onChange={(e) => updateDraftField("location", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Status</label>
                    <input
                      type="text"
                      value={draft.status}
                      onChange={(e) => updateDraftField("status", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Email</label>
                    <input
                      type="email"
                      value={draft.email}
                      onChange={(e) => updateDraftField("email", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2 text-gray-300">Phone</label>
                    <input
                      type="text"
                      value={draft.phone}
                      onChange={(e) => updateDraftField("phone", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm mb-2 text-gray-300">About</label>
                    <textarea
                      rows={4}
                      value={draft.about}
                      onChange={(e) => updateDraftField("about", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-sm mb-2 text-gray-300">Skills (comma separated)</label>
                    <input
                      type="text"
                      value={draft.skills}
                      onChange={(e) => updateDraftField("skills", e.target.value)}
                      className="w-full px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 mb-2">Experience</h3>
                    <div className="space-y-3">
                      {draft.experience.map((item, index) => (
                        <div key={`${item.role}-${index}`} className="grid grid-cols-1 md:grid-cols-4 gap-3">
                          <input
                            type="text"
                            value={item.role}
                            onChange={(e) => updateExperience(index, "role", e.target.value)}
                            className="md:col-span-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Role"
                          />
                          <input
                            type="text"
                            value={item.company}
                            onChange={(e) => updateExperience(index, "company", e.target.value)}
                            className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Company"
                          />
                          <input
                            type="text"
                            value={item.period}
                            onChange={(e) => updateExperience(index, "period", e.target.value)}
                            className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Period"
                          />
                          <textarea
                            rows={2}
                            value={item.summary}
                            onChange={(e) => updateExperience(index, "summary", e.target.value)}
                            className="md:col-span-4 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Summary"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-300 mb-2">Education</h3>
                    <div className="space-y-3">
                      {draft.education.map((item, index) => (
                        <div key={`${item.degree}-${index}`} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <input
                            type="text"
                            value={item.degree}
                            onChange={(e) => updateEducation(index, "degree", e.target.value)}
                            className="md:col-span-2 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Degree"
                          />
                          <input
                            type="text"
                            value={item.school}
                            onChange={(e) => updateEducation(index, "school", e.target.value)}
                            className="px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="School"
                          />
                          <input
                            type="text"
                            value={item.period}
                            onChange={(e) => updateEducation(index, "period", e.target.value)}
                            className="md:col-span-3 px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Period"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
                <p className="text-sm text-gray-400">Applications</p>
                <p className="mt-2 text-2xl font-semibold">18</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
                <p className="text-sm text-gray-400">Interviews</p>
                <p className="mt-2 text-2xl font-semibold">6</p>
              </div>
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-5">
                <p className="text-sm text-gray-400">Saved Jobs</p>
                <p className="mt-2 text-2xl font-semibold">12</p>
              </div>
            </div>

            <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-3">About</h2>
              <p className="text-gray-400 leading-relaxed">
                {profile.about}
              </p>
            </section>

            <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm bg-gray-700 text-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">Experience</h2>
              <div className="space-y-4">
                {profile.experience.map((item) => (
                  <div
                    key={item.role}
                    className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold">{item.role}</h3>
                        <p className="text-gray-400">{item.company}</p>
                      </div>
                      <span className="text-sm text-gray-500">
                        {item.period}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-400">{item.summary}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-gray-800 border border-gray-700 rounded-2xl p-6">
              <h2 className="text-lg font-semibold mb-4">Education</h2>
              <div className="space-y-4">
                {profile.education.map((item) => (
                  <div
                    key={item.degree}
                    className="border-b border-gray-700 pb-4 last:border-b-0 last:pb-0"
                  >
                    <h3 className="font-semibold">{item.degree}</h3>
                    <p className="text-gray-400">{item.school}</p>
                    <span className="text-sm text-gray-500">{item.period}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
