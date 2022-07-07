import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: null,
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
  },
});

export const {
  getProfileSuccess,
  changeEmailSuccess,
  changeUsernameSuccess,
  changePasswordSuccess,
  changeContactSuccess,
  changeAvatarSuccess,
} = userSlice.actions;

export default userSlice.reducer;
