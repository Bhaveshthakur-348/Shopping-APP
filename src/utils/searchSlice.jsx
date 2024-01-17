import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    updateSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { updateSearchTerm } = searchSlice.actions;

export const selectSearchTerm = (state) => state.search.searchTerm;

export default searchSlice.reducer;
