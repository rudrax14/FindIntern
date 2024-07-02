import { createSlice } from "@reduxjs/toolkit";

export const userChatSlice = createSlice({
  name: "userChat",
  initialState: {
    userList: [],
    chat: {},
    loading: true,
  },
  reducers: {
    setChat: (state, action) => {
      state.chat = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setChat, setUserList, setLoading } = userChatSlice.actions;
export default userChatSlice.reducer;
