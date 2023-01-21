import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: "",
  tags: [],
  search: "",
  page: 1,
  limit: 12,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByAuthor: (state, action) => {
      state.author = action.payload.toLowerCase();
    },
    filterByTags: (state, action) => {
      const index = state.tags.indexOf(action.payload);
      if (index === -1) {
        state.tags.push(action.payload);
      } else {
        state.tags.splice(index, 1);
      }
    },
    filterBySearch: (state, action) => {
      state.search = action.payload;
    },
    PaginationFilter: (state, action) => {
      state.page = action.payload;
    },
    clearFilter: (state, action) => {
      state.author = "";
      state.tags = [];
      state.search = "";
      state.page = 1;
      state.limit = 12;
    },
  },
});

export default filterSlice.reducer;
export const {
  clearFilter,
  PaginationFilter,
  filterByAuthor,
  filterByTags,
  filterBySearch,
} = filterSlice.actions;
