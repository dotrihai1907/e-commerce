import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    categories: null,
    category: null,
    productsByCategory: null,
  },
  reducers: {
    getAllCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
    },
    getCategorySuccess: (state, action) => {
      state.category = action.payload;
    },
    getProductsByCategorySuccess: (state, action) => {
      state.productsByCategory = action.payload;
    },
  },
});

export const {
  getAllCategoriesSuccess,
  getCategorySuccess,
  getProductsByCategorySuccess,
} = productSlice.actions;

export default productSlice.reducer;
