import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
    amountOrdersByAdmin: 0,
  },
  reducers: {
    getOrdersSuccess: (state, action) => {
      state.orders = action.payload;
    },
    getAmountOrdersByAdminSuccess: (state, action) => {
      state.amountOrdersByAdmin = action.payload;
    },
  },
});

export const { getOrdersSuccess, getAmountOrdersByAdminSuccess } =
  ordersSlice.actions;

export default ordersSlice.reducer;
