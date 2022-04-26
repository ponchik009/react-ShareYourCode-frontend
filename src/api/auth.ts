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
    .get<IUser>("/auth")
    .then((response) => response.data)
    .then((user) => user);
};

const logOut = async () => {
  axios.post("/auth/logout");
};

const register = async (email: string, password: string, name: string) => {
  return axios
    .post<IUser>("/auth/register", {
      email,
      password,
      name,
    })
    .then((response) => response.data)
    .then((user) => user);
};

export interface IAuthApi {
  logIn: (email: string, password: string) => Promise<IUser>;
  getUser: () => Promise<IUser>;
  logOut: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<IUser>;
}

export const auth: IAuthApi = {
  logIn,
  getUser,
  logOut,
  register,
};
