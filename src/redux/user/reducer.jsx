import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
    allAdmins: null,
    allUsers: null,
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
    getAllAdminsSuccess: (state, action) => {
      state.allAdmins = action.payload;
    },
    getAllUsersSuccess: (state, action) => {
      state.allUsers = action.payload;
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
  getAllAdminsSuccess,
  getAllUsersSuccess,
} = userSlice.actions;

export default userSlice.reducer;
