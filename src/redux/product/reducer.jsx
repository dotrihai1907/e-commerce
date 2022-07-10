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
    queryProducts: null,
    idProductUpdate: null,
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
    getQueryProductsSuccess: (state, action) => {
      state.queryProducts = action.payload;
    },
    getIdProductUpdateSuccess: (state, action) => {
      state.idProductUpdate = action.payload;
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
  getQueryProductsSuccess,
  getIdProductUpdateSuccess,
} = productSlice.actions;

export default productSlice.reducer;
