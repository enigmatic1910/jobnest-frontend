import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobs/jobSlice.js';
import savedJobsReducer from '../features/savedJobs/savedJobsSlice.js';

export const store = configureStore({
    reducer:{
        jobs : jobsReducer,
        savedJobs: savedJobsReducer,
    }
})