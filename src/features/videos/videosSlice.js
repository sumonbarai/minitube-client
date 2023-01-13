import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideos from "./videosAPI";

const initialState = {
  isLoading: false,
  error: "",
  videos: [],
};

export const getVideosThunk = createAsyncThunk(
  "videos/getVideosThunk",
  async () => {
    const data = await getVideos();
    return data;
  }
);

const videosSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVideosThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideosThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.videos = action.payload;
      })
      .addCase(getVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.error = action.error;
      });
  },
});

export default videosSlice.reducer;
