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
    clearCart: () => {
      return { items: [] }; 
    },
  },
});

export const { addItem, clearCart } = addSlice.actions;
export default addSlice.reducer;
