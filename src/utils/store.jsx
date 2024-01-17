import { configureStore } from "@reduxjs/toolkit";
import addSlice from "./addSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    add: addSlice,
    search: searchSlice,
  },
});

export default store;
