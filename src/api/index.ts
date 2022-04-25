import { auth, IAuthApi } from "./auth";

export interface IApi {
  auth: IAuthApi;
}

export const api: IApi = {
  auth,
};
