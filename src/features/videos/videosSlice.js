import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideos, { postVideos } from "./videosAPI";

const initialState = {
  isLoading: false,
  error: "",
  videos: [],
  totalNumberOfVideos: 0,
};

export const getVideosThunk = createAsyncThunk(
  "videos/getVideosThunk",
  async ({ author, tags, search, page, limit }) => {
    const data = await getVideos(author, tags, search, page, limit);
    return data;
  }
);
export const postVideosThunk = createAsyncThunk(
  "videos/postVideosThunk",
  async (inputData) => {
    const data = await postVideos(inputData);
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
        state.videos = action.payload.data;
        state.totalNumberOfVideos = action.payload.totalNumberOfData;
      })
      .addCase(getVideosThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.videos = [];
        state.error = action.error;
      })
      // post video
      .addCase(postVideosThunk.fulfilled, (state, action) => {
        state.videos.pop();
        state.videos.unshift(action.payload);
      });
  },
});

export default videosSlice.reducer;
