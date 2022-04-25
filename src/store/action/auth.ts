import { createAsyncThunk } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { api, IApi } from "../../api";
import { AuthActions, AuthActionTypes, AuthState } from "../../interfaces/auth";

export const logIn = (email: string, password: string) => {
  return async (dispatch: Dispatch<AuthActions>) => {
    const user = await api.auth.logIn(email, password);
    dispatch({
      type: AuthActionTypes.FETCH_USER,
      payload: user,
    });
  };
};
