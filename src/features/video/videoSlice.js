import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo from "./videoAPI";

const initialState = {
  isLoading: false,
  error: "",
  video: {},
};

export const getVideoThunk = createAsyncThunk(
  "video/getVideoThunk",
  async (id) => {
    const data = await getVideo(id);
    return data;
  }
);

const videoSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getVideoThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getVideoThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.video = action.payload;
      })
      .addCase(getVideoThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.video = [];
        state.error = action.error;
      });
  },
});

export default videoSlice.reducer;
