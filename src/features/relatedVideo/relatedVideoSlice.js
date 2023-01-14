import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getRelatedVideo from "./relatedVideoAPI";

const initialState = {
  isLoading: false,
  error: "",
  relatedVideo: [],
};

export const getRelatedVideoThunk = createAsyncThunk(
  "relatedVideo/getRelatedVideoThunk",
  async (id, tags) => {
    const data = await getRelatedVideo(id, tags);
    return data;
  }
);

const relatedVideoSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getRelatedVideoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRelatedVideoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.relatedVideo = action.payload;
      })
      .addCase(getRelatedVideoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideo = [];
        state.error = action.error;
      });
  },
});

export default relatedVideoSlice.reducer;
