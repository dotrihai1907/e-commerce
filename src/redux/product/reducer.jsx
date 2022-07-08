import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    categories: null,
    category: null,
    productsByCategory: null,
    keyword: null,
    productsBySearch: null,
    product: null,
  },
  reducers: {
    getAllProductsSuccess: (state, action) => {
      state.products = action.payload;
    },
    getAllCategoriesSuccess: (state, action) => {
      state.categories = action.payload;
    },
    getCategorySuccess: (state, action) => {
      state.category = action.payload;
    },
    getProductsByCategorySuccess: (state, action) => {
      state.productsByCategory = action.payload;
    },
    getKeywordSuccess: (state, action) => {
      state.keyword = action.payload;
    },
    getProductsBySearchSuccess: (state, action) => {
      state.productsBySearch = action.payload;
    },
    getProductSuccess: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const {
  getAllProductsSuccess,
  getAllCategoriesSuccess,
  getCategorySuccess,
  getProductsByCategorySuccess,
  getKeywordSuccess,
  getProductsBySearchSuccess,
  getProductSuccess,
} = productSlice.actions;

export default productSlice.reducer;
