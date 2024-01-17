import { createSlice } from "@reduxjs/toolkit";

const addSlice = createSlice({
  name: "add",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemIdToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== itemIdToRemove);
    },
    clearCart: () => {
      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = addSlice.actions;
export default addSlice.reducer;
