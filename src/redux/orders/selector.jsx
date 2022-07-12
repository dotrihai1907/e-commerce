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

export const selectQueryOrdersByAdmin = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice?.queryOrdersByAdmin
);

export const selectIdOrder = createSelector(
  [selectOrdersReducer],
  (ordersSlice) => ordersSlice?.idOrder
);
