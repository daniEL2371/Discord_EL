import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.channelId = action.payload;
    },
    setChannelName: (state, action) => {
      state.channelName = action.payload;
    },
  },
});
export const { setChannelId, setChannelName } = appSlice.actions;
export const getChannelID = (state) => state.app.channelId;
export const getChanneName = (state) => state.app.channelName;

export default appSlice.reducer;