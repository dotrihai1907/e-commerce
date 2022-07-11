import { createSelector } from "reselect";

const selectUserReducer = (state) => state.userReducer;

//----------------------------------------------------------------

export const selectProfile = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.profile
);

//----------------------admins------------------------

export const selectAmountAdmins = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.amountAdmins
);

//----------------------users------------------
export const selectAmountUsers = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.amountUsers
);

export const selectQueryUsers = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.queryUsers
);

export const selectIdUserUpdate = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.idUserUpdate
);

export const selectUser = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.user
);
