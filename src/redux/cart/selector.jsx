import { createSelector } from "reselect";

const selectCartReducer = (state) => state.cartReducer;

//----------- carts-----------------
export const selectCart = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice?.cart
);

//-----------idCart---------------
export const selectCartId = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice?.cartId
);

//-------------by ID cart-----------------
export const selectCartById = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice?.cartById
);
