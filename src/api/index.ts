import { auth, IAuthApi } from "./auth";
import { IGroupApi, group } from "./group";

export interface IApi {
  auth: IAuthApi;
  group: IGroupApi;
}

export const api: IApi = {
  auth,
  group,
};
