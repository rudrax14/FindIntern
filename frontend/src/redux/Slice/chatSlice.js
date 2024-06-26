import { createSlice } from "@reduxjs/toolkit";

export const userChatSlice = createSlice({
  name: "userChat",
  initialState: {
    userList: [],
    chat: {},
  },
  reducers: {
    setChat: (state, action) => {
      state.chat = action.payload;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
  },
});

export const { setChat, setUserList } = userChatSlice.actions;
export default userChatSlice.reducer;
