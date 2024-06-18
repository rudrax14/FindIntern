import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice/userSlice";
import jobReducer from "./Slice/jobSlice";
import userChatReducer from "./Slice/chatSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    job: jobReducer,
    userChat: userChatReducer,
  },
});

export default store;
