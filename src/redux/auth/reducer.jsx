import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    auth: null,
    loading: false,
  },
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    loadingDone: (state) => {
      state.loading = false;
    },
    loginSuccess: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const { loading, loadingDone, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
