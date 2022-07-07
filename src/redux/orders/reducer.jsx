import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: null,
  },
  reducers: {
    getOrdersSuccess: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { getOrdersSuccess } = ordersSlice.actions;

export default ordersSlice.reducer;
