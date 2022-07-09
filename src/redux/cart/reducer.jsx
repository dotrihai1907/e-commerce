import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: null,
    cartId: null,
    cartById: null,
  },
  reducers: {
    createCartSuccess: (state, action) => {
      state.cart = action.payload;
      state.cartId = action.payload.cart.id;
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
    deleteCartSuccess: (state) => {
      state.cart = null;
      state.cartId = null;
      cartById = null;
    },
  },
});

export const {
  createCartSuccess,
  getCartByIdSuccess,
  deleteItemSuccess,
  deleteCartSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
