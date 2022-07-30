import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, fetchCurrentUser } from "./auth-operations";

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [register.pending]: (state) => void (state.loading = true),
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [register.rejected]: (state) => (state.loading = false),
    [login.pending]: (state) => void (state.loading = true),
    [login.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [login.rejected]: (state) => (state.loading = false),
    [logOut.pending]: (state) => void (state.loading = true),
    [logOut.fulfilled]: (state, _) => {
      state.user = { name: "", email: "" };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [logOut.rejected]: (state) => (state.loading = false),
    [fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [fetchCurrentUser.rejected](state, { payload }) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
