import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cartReducer;

export const selectCarts = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice?.carts
);
