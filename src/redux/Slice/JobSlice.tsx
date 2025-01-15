import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { create_job, deleteJobs, getAlljobs, updateJobs, viewJobs } from "../Api/JobApi"; // Import 
import { JobState } from "@/types/job-data-type";
const initialState: JobState = {
  jobs: [],
  job: {},
  loading: false,
  error: null,
};


const AsyncFunctionThunk = (name: string, apiFunction: any) => {
  return createAsyncThunk<any, any>(
    `jobs/${name}`,
    async (data: any) => {
      try {
        const response: AxiosResponse<any, any> = await apiFunction(data);
        return response.data;
      } catch (error) {
        console.error(`Failed to ${name}:`, error);
        throw error;
      }
    }
  );
};

export const createJob = AsyncFunctionThunk("createJob", create_job);
export const updateJob = AsyncFunctionThunk("updateJobs",updateJobs);
export const getAlljob = AsyncFunctionThunk("getAlljobs",getAlljobs);
export const deletejob = AsyncFunctionThunk("getAlljobs",deleteJobs);
export const viewjob   =AsyncFunctionThunk("viewJobs",viewJobs)

const jobSlice = createSlice({
  name: "jobSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      
      .addCase(createJob.fulfilled, (state, action) => {
        state.job = action.payload; 
        state.loading = false;
      })
      .addCase(createJob.pending, (state) => {
        state.loading = true; 
      })
      .addCase(createJob.rejected, (state, action) => {
        state.loading = false; 
      })


      .addCase(getAlljob.fulfilled, (state, action) => {
        state.job = action.payload; 
        state.loading = false;
      })
      .addCase(getAlljob.pending, (state) => {
        state.loading = true; 
      })
      .addCase(getAlljob.rejected, (state, action) => {
        state.loading = false; 
      })
      

      .addCase(updateJob.fulfilled, (state, action) => {
        state.job = action.payload; 
        state.loading = false;
      })

      .addCase(updateJob.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateJob.rejected, (state, action) => {
        state.loading = false;
      })

      .addCase(deletejob.fulfilled, (state, action) => {
        state.job = action.payload; 
        state.loading = false;
      })

      .addCase(deletejob.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletejob.rejected, (state, action) => {
        state.loading = false;
      })


      .addCase(viewjob.fulfilled, (state, action) => {
        state.job = action.payload; 
        state.loading = false;
      })

      .addCase(viewjob.pending, (state) => {
        state.loading = true;
      })
      .addCase(deletejob.rejected, (state, action) => {
        state.loading = false;
        console.error("Error in viewjob:", action.error.message); 
      });

      
  },
});

export default jobSlice.reducer;
