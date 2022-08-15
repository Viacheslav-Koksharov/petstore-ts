import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut, fetchCurrentUser, placeOrder } from "./auth-operations";
import { IState } from '../interfaces/State.interface';

const initialState: IState = {
  user: {
    name: '', email: ''
  },
  token: null,
  loading: false,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  orders: []
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state: IState,) => void (state.loading = true))
      .addCase(register.fulfilled, (state: IState, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(register.rejected, (state: IState) => { state.loading = false })
      .addCase(login.pending, (state: IState) => void (state.loading = true))
      .addCase(login.fulfilled, (state: IState, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(login.rejected, (state: IState) => { state.loading = false })
      .addCase(logOut.pending, (state: IState) => void (state.loading = true))
      .addCase(logOut.fulfilled, (state: IState, _) => {
        state.user = { name: "", email: "" };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(logOut.rejected, (state: IState) => { state.loading = false })
      .addCase(fetchCurrentUser.pending, (state: IState, _) => {
        state.isFetchingCurrentUser = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state: IState, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.rejected, (state: IState, _) => {
        state.isFetchingCurrentUser = false;
      })
      .addCase(placeOrder.pending, (state: IState) => void (state.loading = true))
      .addCase(placeOrder.fulfilled, (state: IState, { payload }) => {
        state.orders.push(payload)
      })
      .addCase(placeOrder.rejected, (state: IState) => { state.loading = false })
  },
});

export default authSlice.reducer;
