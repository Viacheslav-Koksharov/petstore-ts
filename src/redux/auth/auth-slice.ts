import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, fetchCurrentUser } from "./auth-operations";


export interface IUser {
  name: string;
  email: string;
}

interface IInitialSliceState {
  user: IUser;
  token: null;
  loading: boolean;
  isLoggedIn: boolean;
  isFetchingCurrentUser: boolean;
  status: null
}

const initialState: IInitialSliceState = {
  user: {
    name: '', email: ''
  },
  token: null,
  loading: false,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  status: null
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state: IInitialSliceState,) => void (state.loading = true))
      .addCase(register.fulfilled, (state: IInitialSliceState, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, (state: IInitialSliceState) => { state.loading = false })
      .addCase(login.pending, (state: IInitialSliceState) => void (state.loading = true))
      .addCase(login.fulfilled, (state: IInitialSliceState, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state: IInitialSliceState) => { state.loading = false })
      .addCase(logOut.pending, (state: IInitialSliceState) => void (state.loading = true))
      .addCase(logOut.fulfilled, (state: IInitialSliceState, _) => {
        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logOut.rejected, (state: IInitialSliceState) => { state.loading = false })
      .addCase(fetchCurrentUser.pending, (state: IInitialSliceState, _) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state: IInitialSliceState, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state: IInitialSliceState, _) => {
        state.isFetchingCurrentUser = false;
      })
  },
});

export default authSlice.reducer;
