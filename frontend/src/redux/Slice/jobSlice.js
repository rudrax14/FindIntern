import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    job: {},
    allJobs: [],
    userChatList: [],
    loading: true,
    error: null,
  },
  reducers: {
    setJob: (state, action) => {
      state.job = action.payload;
    },
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setUserChatList: (state, action) => {
      state.userChatList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setJob, setAllJobs, setUserChatList, setLoading, setError } =
  jobSlice.actions;
export default jobSlice.reducer;
