import { createSelector } from "reselect";

const selectOrdersReducer = (state) => state.ordersReducer;

export const selectOrders = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice?.orders
);

export const selectAmountOrdersByAdmin = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice?.amountOrdersByAdmin
);
