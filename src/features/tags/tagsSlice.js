import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getTags from "./tagsAPI";

const initialState = {
  isLoading: false,
  error: "",
  tags: [],
};

export const getTagsThunk = createAsyncThunk("tags/getTagsThunk", async () => {
  const data = await getTags();
  return data;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTagsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTagsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = "";
        state.tags = action.payload;
      })
      .addCase(getTagsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.error = action.error;
      });
  },
});

export default tagsSlice.reducer;
