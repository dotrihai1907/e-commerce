import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: [],
  },
  reducers: {
    createCartSuccess: (state, action) => {
      state.carts.push(action.payload);
    },
    createItemSuccess: (state, action) => {
      state.carts.push(action.payload);
    },
  },
});

export const { createCartSuccess, createItemSuccess } = cartSlice.actions;

export default cartSlice.reducer;
