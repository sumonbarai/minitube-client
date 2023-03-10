import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getVideo, {
  decreaseLikes,
  deleteVideo,
  increaseLikes,
  putVideo,
} from "./videoAPI";

const initialState = {
  isLoading: false,
  error: "",
  video: {},
};
// get single video thunk
export const getVideoThunk = createAsyncThunk(
  "video/getVideoThunk",
  async (id) => {
    const data = await getVideo(id);
    return data;
  }
);
// updateVideoThunk  thunk
export const updateVideoThunk = createAsyncThunk(
  "video/updateVideoThunk",
  async ({ id, updateData }) => {
    const data = await putVideo(id, updateData);
    return data;
  }
);

export const likeIncreaseThunk = createAsyncThunk(
  "video/likeIncreaseThunk",
  async ({ id, updatedValue }) => {
    const data = await increaseLikes(id, updatedValue);
    return data;
  }
);
export const likeDecreaseThunk = createAsyncThunk(
  "video/likeDecreaseThunk",
  async ({ id, updatedValue }) => {
    const data = await decreaseLikes(id, updatedValue);
    return data;
  }
);
export const deleteVideoThunk = createAsyncThunk(
  "video/deleteVideoThunk",
  async (id) => {
    const data = await deleteVideo(id);
    return data;
  }
);

const videoSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      // get video thunk
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
        state.video = {};
        state.error = action.error;
      })
      // increase like thunk
      .addCase(likeIncreaseThunk.fulfilled, (state, action) => {
        state.video = action.payload;
      })
      .addCase(likeIncreaseThunk.rejected, (state, action) => {
        console.log(action.error);
      })
      // decrease like thunk
      .addCase(likeDecreaseThunk.fulfilled, (state, action) => {
        state.video = action.payload;
      })
      .addCase(likeDecreaseThunk.rejected, (state, action) => {
        state.error = action.error;
      })
      // decrease like thunk
      .addCase(deleteVideoThunk.fulfilled, (state, action) => {
        state.video = {};
        state.error = "";
      })
      // delete thunk
      .addCase(deleteVideoThunk.rejected, (state, action) => {
        state.error = action.error;
      })
      // update thunk
      .addCase(updateVideoThunk.fulfilled, (state, action) => {
        state.video = action.payload;
      });
  },
});

export default videoSlice.reducer;
export const { likeIncrease } = videoSlice.actions;
