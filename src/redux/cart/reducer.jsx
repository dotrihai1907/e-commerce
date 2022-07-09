import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    carts: null,
    cartById: null,
  },
  reducers: {
    createCartSuccess: (state, action) => {
      state.carts.push(action.payload);
    },
    createItemSuccess: (state, action) => {
      state.carts.push(action.payload);
    },
    getCartByIdSuccess: (state, action) => {
      state.cartById = action.payload;
    },
    deleteItemSuccess: (state, action) => {
      const newCartById = state.cartById.items.filter(
        (item) => item.id !== action.payload.item.id
      );
      state.cartById = newCartById;
    },
  },
});

export const {
  createCartSuccess,
  createItemSuccess,
  getCartByIdSuccess,
  deleteItemSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
