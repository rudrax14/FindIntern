import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching user data
export const fetchUserData = createAsyncThunk(
    'user/fetchUserData',
    async (userType, { rejectWithValue }) => {
        try {
            const jwtToken = localStorage.getItem("userToken");
            const response = await axios.get(`http://localhost:5000/api/v1/${userType}/profile`, {
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                }
            });
            return response.data.profile;
        } catch (err) {
            return rejectWithValue(err.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userType: '',
        userMode: 'sign-in',
        userDetails: {},
        loading: false,
        error: null
    },
    reducers: {
        setUserType: (state, action) => {
            state.userType = action.payload;
        },
        setUserMode: (state, action) => {
            state.userMode = action.payload;
        }
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
    }
});

export const { setUserType, setUserMode } = userSlice.actions;
export default userSlice.reducer;
