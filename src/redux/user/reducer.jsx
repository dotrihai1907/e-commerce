import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    amountAdmins: 0,
    amountUsers: 0,
    queryUsers: null,
    idUserUpdate: null,
    user: null,
  },
  reducers: {
    getProfileSuccess: (state, action) => {
      state.profile = action.payload;
    },
    changeEmailSuccess: (state, action) => {
      state.profile = action.payload;
    },
    changeUsernameSuccess: (state, action) => {
      state.profile = action.payload;
    },
    changePasswordSuccess: (state, action) => {
      state.profile = action.payload;
    },
    changeContactSuccess: (state, action) => {
      state.profile = action.payload;
    },
    changeAvatarSuccess: (state, action) => {
      state.profile = action.payload;
    },
    getAmountAdminsSuccess: (state, action) => {
      state.amountAdmins = action.payload;
    },
    getAmountUsersSuccess: (state, action) => {
      state.amountUsers = action.payload;
    },
    getQueryUsersSuccess: (state, action) => {
      state.queryUsers = action.payload;
    },
    getIdUserUpdateSuccess: (state, action) => {
      state.idUserUpdate = action.payload;
    },
    getUserSuccess: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {
  getProfileSuccess,
  changeEmailSuccess,
  changeUsernameSuccess,
  changePasswordSuccess,
  changeContactSuccess,
  changeAvatarSuccess,
  getAmountAdminsSuccess,
  getAmountUsersSuccess,
  getQueryUsersSuccess,
  getIdUserUpdateSuccess,
  getUserSuccess,
} = userSlice.actions;

export default userSlice.reducer;
