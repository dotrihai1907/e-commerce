import { createSelector } from "reselect";

const selectProductReducer = (state) => state.productReducer;

// ----------------------------------------------------

export const selectProducts = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.products
);

export const selectAmountProducts = createSelector(
  [selectProducts],
  (products) => products?.total
);

// ----------------------------------------------------

export const selectCategories = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.categories
);

// ------------------------------

export const selectCategory = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.category
);

// ----------------------------------------------------

export const selectProductsByCategory = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.productsByCategory
);

// ------------------------------------------------------

export const selectKeyword = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.keyword
);

// -----------------------------------------------------

export const selectProductsBySearch = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.productsBySearch
);

// ------------------------------

export const selectProduct = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.product
);

// ------------------------------

export const selectQueryProducts = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.queryProducts
);

// ------------------------------

export const selectIdProductUpdate = createSelector(
  [selectProductReducer],
  (productSlice) => productSlice?.idProductUpdate
);
