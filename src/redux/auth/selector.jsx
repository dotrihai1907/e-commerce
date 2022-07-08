import { createSelector } from "reselect";

// trỏ đến state của reducer authentication
const selectAuthentication = (state) => state.authentication;

// trỏ đến item auth của authSlice
const selectAuth = createSelector(
  [selectAuthentication],
  (authSlice) => authSlice?.auth // authSlice && authSlice.auth
);

// trỏ đến item loading của authSlice
export const selectLoading = createSelector(
  [selectAuthentication],
  (authSlice) => authSlice?.loading // authSlice && authSlice.loading
);

//--------------user------------------------------
const selectUser = createSelector([selectAuth], (auth) => auth?.user);

export const selectRole = createSelector([selectUser], (user) => user?.role);

export const selectAvatar = createSelector(
  [selectUser],
  (user) => user?.avatar
);

export const selectIsEmailVerified = createSelector(
  [selectUser],
  (user) => user?.isEmailVerified
);

export const selectUserId = createSelector([selectUser], (user) => user?.id);

//------------tokens------------------------------
const selectTokens = createSelector([selectAuth], (auth) => auth?.tokens);

export const selectAccessToken = createSelector(
  [selectTokens],
  (tokens) => tokens?.access.token
);

export const selectRefreshToken = createSelector(
  [selectTokens],
  (tokens) => tokens?.refresh.token
);

//----------deviceId--------------------------------------
export const selectDeviceId = createSelector(
  [selectAuth],
  (auth) => auth?.deviceId
);
