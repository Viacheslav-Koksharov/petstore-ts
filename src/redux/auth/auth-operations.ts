import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IToken } from '../interfaces/Token.interface';
import { IOrder } from '../interfaces/Order.interface';

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: IToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = ``;
  },
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials: { name: string, email: string, password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);

export const login = createAsyncThunk("auth/login", async (credentials: { email: string, password: string }, thunkAPI) => {
  try {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue('error');
  }
});

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue('error');
  }
});

export const fetchCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state: RootState = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('error');
    }

    token.set(persistedToken);

    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);

export const placeOrder = createAsyncThunk("auth/placeOrder", async (order: IOrder, thunkAPI) => {
  try {
    setTimeout(() => {
      window.localStorage.setItem("basket", '[]')
    }, 500);
    window.localStorage.setItem("orders", JSON.stringify(order));
    return order;
  } catch (error) {
    return thunkAPI.rejectWithValue('error');
  }
})
