import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    savedList: [],
}

export const savedJobsSlice = createSlice({
    name: "savedJobs",
    initialState,
    reducers: {
        saveJob: (state, action) =>{
            const exists = state.savedList.find(job => job.id === action.payload.id);
            if(!exists){
                state.savedList.push(action.payload);
            }
        },
        removeJob: (state, action) => {
            state.savedList = state.savedList.filter(job => job.id !== action.payload);
        }
    }
})

export const { saveJob, removeJob } = savedJobsSlice.actions;
export default savedJobsSlice.reducer;