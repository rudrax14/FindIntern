import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slice/userSlice';
import jobReducer from './Slice/jobSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        job: jobReducer
    },
});

export default store;
