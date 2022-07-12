import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    amountOrdersByAdmin: 0,
    queryOrdersByAdmin: null,
    idOrder: null,
    orderById: null,
  },
  reducers: {
    getOrdersSuccess: (state, action) => {
      state.orders = action.payload;
    },
    getAmountOrdersByAdminSuccess: (state, action) => {
      state.amountOrdersByAdmin = action.payload;
    },
    getQueryOrdersByAdminSuccess: (state, action) => {
      state.queryOrdersByAdmin = action.payload;
    },
    getIdOrderSuccess: (state, action) => {
      state.idOrder = action.payload;
    },
    getOrderByIdSuccess: (state, action) => {
      state.orderById = action.payload;
    },
  },
});

export const {
  getOrdersSuccess,
  getAmountOrdersByAdminSuccess,
  getQueryOrdersByAdminSuccess,
  getIdOrderSuccess,
  getOrderByIdSuccess,
} = ordersSlice.actions;

export default ordersSlice.reducer;
