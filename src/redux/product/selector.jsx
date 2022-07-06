import { createSelector } from "reselect";

const selectProductReducer = (state) => state.productReducer;

// ----------------------------------------------------

export const selectProducts = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.products
);

// ----------------------------------------------------

export const selectCategories = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.categories
);

// ----------------------------------------------------

export const selectProductsByCategory = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.productsByCategory
);

