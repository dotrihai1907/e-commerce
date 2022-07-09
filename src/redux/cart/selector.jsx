import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cartReducer;

//-----------all carts-----------------
export const selectCarts = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice?.carts
);

//-------------by ID cart-----------------
export const selectCartById = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice?.cartById
);
