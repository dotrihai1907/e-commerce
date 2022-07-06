import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    categories: null,
    productsByCategory: null,
  },
  reducers: {
    getAllCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
    },
    getProductsByCategorySuccess: (state, action) => {
      state.productsByCategory = action.payload;
    },
  },
});

export const { getAllCategoriesSuccess, getProductsByCategorySuccess } =
  productSlice.actions;

export default productSlice.reducer;
