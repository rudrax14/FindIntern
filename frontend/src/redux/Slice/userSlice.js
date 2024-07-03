import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (userType, { rejectWithValue }) => {
    try {
      const jwtToken = localStorage.getItem("userToken");
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/${userType}/profile`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      );
      console.log("fetchUserDataSlice", response.data.profile);
      return response.data.profile;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userType: "",
    userMode: "sign-in",
    userDetails: {},
    userProfiles: {},
    loading: false,
    error: null,
  },
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setUserMode: (state, action) => {
      state.userMode = action.payload;
    },
    setUserProfiles: (state, action) => {
      state.userProfiles = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearUserDetails: (state) => {
      state.userDetails = {};
    },
    updateProfileImage: (state, action) => {
      if (state.userDetails) {
        state.userDetails.profileImgUrl = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.userDetails = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setUserType,
  setUserMode,
  clearUserDetails,
  updateProfileImage,
  setUserDetails,
  setUserProfiles,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;
