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
  },
});

export const { getProfileSuccess } = userSlice.actions;

export default userSlice.reducer;
