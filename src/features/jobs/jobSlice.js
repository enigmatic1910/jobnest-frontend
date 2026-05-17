import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      location: "Bangalore",
      salary: "12 LPA",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "Microsoft",
      location: "Hyderabad",
      salary: "15 LPA",
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "Amazon",
      location: "Pune",
      salary: "18 LPA",
    },
    {
      id: 4,
      title: "React Developer",
      company: "Infosys",
      location: "Delhi",
      salary: "8 LPA",
    },
    {
      id: 5,
      title: "Java Developer",
      company: "TCS",
      location: "Mumbai",
      salary: "7 LPA",
    },
    {
      id: 6,
      title: "Python Developer",
      company: "Wipro",
      location: "Chennai",
      salary: "9 LPA",
    },
    {
      id: 7,
      title: "UI/UX Designer",
      company: "Adobe",
      location: "Noida",
      salary: "10 LPA",
    },
    {
      id: 8,
      title: "DevOps Engineer",
      company: "IBM",
      location: "Kolkata",
      salary: "14 LPA",
    },
    {
      id: 9,
      title: "Data Analyst",
      company: "Accenture",
      location: "Gurgaon",
      salary: "11 LPA",
    },
    {
      id: 10,
      title: "Machine Learning Engineer",
      company: "NVIDIA",
      location: "Bangalore",
      salary: "20 LPA",
    },
    {
      id: 11,
      title: "Cloud Engineer",
      company: "Oracle",
      location: "Hyderabad",
      salary: "16 LPA",
    },
    {
      id: 12,
      title: "Software Engineer Intern",
      company: "Flipkart",
      location: "Remote",
      salary: "30k/month",
    },
  ],

  status: "idle",
  error: null,
};

export const jobSlice = createSlice({
  name: "jobs",
  initialState,

  reducers: {
    setJobs: (state, action) => {
      state.list = action.payload;
    },

    addJob: (state, action) => {
      state.list.push(action.payload);
    },

    removeJob: (state, action) => {
      state.list = state.list.filter(
          (job) => job.id !== action.payload
      );
    },
  },
});

export const { setJobs, addJob, removeJob } =
    jobSlice.actions;

export default jobSlice.reducer;