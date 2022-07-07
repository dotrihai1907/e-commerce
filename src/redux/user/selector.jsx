import { createSelector } from "reselect";

const selectUserReducer = (state) => state.userReducer;

//----------------------------------------------------------------

export const selectProfile = createSelector(
  [selectUserReducer],
  (userSlice) => userSlice?.profile
);
