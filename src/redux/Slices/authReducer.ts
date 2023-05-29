import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../models/user";
import axiosInstance from "../../utils/axios";
interface UserState {
  user: User | null;
  error: string | null;
}
const initialState: UserState = {
  user: null,
  error: null,
};

const store = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    loginSuccess: (state: UserState, action: PayloadAction<User>) => {
      localStorage.setItem("token", JSON.stringify(action.payload.accessToken));
      state.user = action.payload;
    },
    hasError: (state: UserState, action: PayloadAction<string>) => {
      console.log("action", action);
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, hasError } = store.actions;

export function login(user: UserState) {
  return async (dispatch: any) => {
    try {
      const response = await axiosInstance.post("/api/v1/auth/login", user);
      dispatch(loginSuccess(response.data));
      console.log("response", response);
    } catch (err: any) {
      // dispatch(hasError(err.response.data.message));
      console.log("err", err);
    }
  };
}

export const selectAuth = (state: any) => state.auth;

export default store.reducer;
