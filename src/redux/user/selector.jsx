import { createSelector } from "reselect";

const selectUserReducer = (state) => state.userReducer;

//----------------------------------------------------------------

export const selectProfile = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.profile
);

//----------------------admins------------------------

const selectAllAdmins = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.allAdmins
);

export const selectAmountAdmins = createSelector(
  [selectAllAdmins],
  (allAdmins) => allAdmins?.total
);

//----------------------users------------------
const selectAllUsers = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.allUsers
);

export const selectAmountUsers = createSelector(
  [selectAllUsers],
  (allUsers) => allUsers?.total
);
