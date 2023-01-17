import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  author: "",
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByAuthor: (state, action) => {
      state.author = action.payload;
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
    clearFilter: (state, action) => {
      state.author = "";
      state.tags = [];
      state.search = "";
    },
  },
});

export default filterSlice.reducer;
export const { clearFilter, filterByAuthor, filterByTags, filterBySearch } =
  filterSlice.actions;
