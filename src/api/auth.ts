import { IUser } from "../interfaces/entities";
import axios from "./instance";

const logIn = async (email: string, password: string) => {
  return axios
    .post<IUser>("/auth/login", {
      email,
      password,
    })
    .then((response) => response.data)
    .then((user) => user);
};

const getUser = async () => {
  return axios
    .get<IUser>("/auth", {
      withCredentials: true,
    })
    .then((response) => response.data)
    .then((user) => user);
};

export interface IAuthApi {
  logIn: (email: string, password: string) => Promise<IUser>;
  getUser: () => Promise<IUser>;
}

export interface IAuthApi {
  logIn: (email: string, password: string) => Promise<IUser>;
  getUser: () => Promise<IUser>;
}

export const auth: IAuthApi = {
  logIn,
  getUser,
};
